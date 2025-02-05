import { MapContainer, ImageOverlay, Marker, Popup, useMap } from "react-leaflet";
import { CRS, LatLngBoundsExpression, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import ReactDOMServer from "react-dom/server";
import { MdLocationOn } from "react-icons/md";
import images from "@/assets/images";
import L from "leaflet";
import Fuse from "fuse.js";
import { useState, useMemo, useEffect } from 'react';

// Bounding box for the floor plan image
const floorPlanBounds: LatLngBoundsExpression = [
  [0, 0],
  [10, 10],
];

// Initial map center and zoom level
const center: LatLngTuple = [5, 5];
const defaultZoom = 7; // Default zoom level
const searchZoom = 8;  // Zoom level when searching

// Division interface
interface Division {
  name: string;
  coordinates: LatLngTuple;
}

// Sample divisions
const divisions: Division[] = [
  { name: "PAS", coordinates: [1, 2] },
  { name: "HRMDD", coordinates: [2, 4] },
  { name: "Office of the Assistant Regional Director for Administration", coordinates: [3, 7] },
  { name: "CLINIC", coordinates: [4, 2] },
  { name: "HUMAN RESOURCES PLANNING & PERFORMANCE MANAGEMENT SECTION", coordinates: [3.8, 0.9] },
  { name: "PROPERTY AND SUPPLY OFFICE", coordinates: [7.4, 4.5] },
  { name: "KIOSK", coordinates: [4, 1.3] },
  { name: "COMMISION ON AUDIT OFFICE", coordinates: [8.5,1] },
];

// Convert React icon to Leaflet divIcon
const iconMarkup = ReactDOMServer.renderToStaticMarkup(
  <MdLocationOn style={{ color: "blue", fontSize: "60px" }} />
);

const customIcon = L.divIcon({
  html: iconMarkup,
  className: "custom-div-icon",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

// Component to handle map zooming when searching
const ZoomToDivision = ({ target }: { target: LatLngTuple | null }) => {
  const map = useMap();

  useEffect(() => {
    if (target) {
      map.setView(target, searchZoom, { animate: true }); // Set view to target with zoom level
    }
  }, [target, map]);

  return null;
};

const FloorPlanMap = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedDivision, setSelectedDivision] = useState<LatLngTuple | null>(null);

  const fuse = useMemo(() => new Fuse(divisions, {
    keys: ['name'],
    threshold: 0.3,
  }), []);

  const filteredDivisions = useMemo(() => {
    if (!searchTerm) return [];
    const results = fuse.search(searchTerm).map(result => result.item);
    if (results.length > 0) {
      setSelectedDivision(results[0].coordinates); // Automatically set first match
    }
    return results;
  }, [searchTerm, fuse]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search divisions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />

      <MapContainer center={center} zoom={defaultZoom} style={{ height: "600px", width: "100%" }} crs={CRS.Simple}>
        <ImageOverlay url={images.groundFloor} bounds={floorPlanBounds} />
        {filteredDivisions.map((division, index) => (
          <Marker key={index} position={division.coordinates} icon={customIcon}>
            <Popup>{division.name}</Popup>
          </Marker>
        ))}
        <ZoomToDivision target={selectedDivision} />
      </MapContainer>
    </div>
  );
};

export default FloorPlanMap;
