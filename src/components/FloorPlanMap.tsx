import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";
import { CRS, LatLngBoundsExpression, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import ReactDOMServer from "react-dom/server";
import { FaMapPin } from "react-icons/fa";
import images from "@/assets/images";
import L from "leaflet";
import Fuse from "fuse.js"; // Import Fuse.js
import { useState, useMemo } from 'react';

// 1. Define the bounding box for your floor plan image
const floorPlanBounds: LatLngBoundsExpression = [
  [0, 0],
  [10, 10],
];

// 2. Center your map in the same coordinate system
const center: LatLngTuple = [5, 5];

// 3. Create an interface so TypeScript knows each division's shape
interface Division {
  name: string;
  coordinates: LatLngTuple; // EXACTLY [number, number]
}

// 4. Sample list of divisions with placeholder coordinates
const divisions: Division[] = [
  {
    name: "PAS",
    coordinates: [1, 2],
  },
  {
    name: "HRMDD",
    coordinates: [2, 4],
  },
  {
    name: "Office of the Assistant Regional Director for Administration",
    coordinates: [3, 7],
  },
  {
    name: "Budget Section",
    coordinates: [4, 2],
  },
  {
    name: "Cash - Releasing",
    coordinates: [6, 8],
  },
  {
    name: "KIOSK",
    coordinates: [8, 8],
  },
];

// 5. Convert a React icon to static HTML for use in a Leaflet divIcon
const iconMarkup = ReactDOMServer.renderToStaticMarkup(
  <FaMapPin style={{ color: "red", fontSize: "24px" }} />
);

// 6. Create a custom Leaflet divIcon for markers
const customIcon = L.divIcon({
  html: iconMarkup,
  className: "custom-div-icon", // optional: for extra styling
  iconSize: [24, 24],
  iconAnchor: [12, 24],  // tip of the pin is at the coordinate
  popupAnchor: [0, -24], // place the popup above the pin
});

const FloorPlanMap = () => {
  // 7. Create a state for the search term
  const [searchTerm, setSearchTerm] = useState<string>('');

  // 8. Initialize Fuse.js with the divisions array, only once
  const fuse = useMemo(
    () =>
      new Fuse(divisions, {
        keys: ['name'],
        includeScore: true, // Optional: to show how close the match is
        threshold: 0.3, // Lower threshold to increase the match precision
      }),
    []
  );

  // 9. Get the filtered divisions based on the search term
  const filteredDivisions = useMemo(
    () => (searchTerm ? fuse.search(searchTerm).map(result => result.item) : []), // Empty array when no search term
    [searchTerm, fuse]
  );

  return (
    <div>
      {/* 10. Add the search input */}
      <input
        type="text"
        placeholder="Search divisions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded"
      />

      {/* 11. Display the map */}
      <MapContainer
        center={center}
        zoom={2}
        style={{ height: "600px", width: "100%" }}
        crs={CRS.Simple} // Using a simple coordinate system
      >
        {/* 12. Display your floor plan as an ImageOverlay */}
        <ImageOverlay
          url={images.groundFloor} // the floor plan image
          bounds={floorPlanBounds}
        />

        {/* 13. Render a marker for each filtered division only if there's a search term */}
        {filteredDivisions.length > 0 && // Only render markers if there are results
          filteredDivisions.map((division, index) => (
            <Marker
              key={index}
              position={division.coordinates}
              icon={customIcon}
            >
              <Popup>{division.name}</Popup>
            </Marker>
          ))
        }
      </MapContainer>
    </div>
  );
};

export default FloorPlanMap;
