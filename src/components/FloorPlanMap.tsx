import { MapContainer, ImageOverlay, Marker, Popup, useMap } from "react-leaflet";
import { CRS, LatLngBoundsExpression, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import ReactDOMServer from "react-dom/server";
import { MdLocationOn, MdSearch } from "react-icons/md";
import images from "@/assets/images";
import L from "leaflet";
import Fuse from "fuse.js";
import { useState, useMemo, useEffect } from "react";

const floorPlanBounds: LatLngBoundsExpression = [
  [0, 0],
  [10, 10],
];
const center: LatLngTuple = [5, 5];
const defaultZoom = 7;
const searchZoom = 8;

interface Division {
  name: string;
  coordinates: LatLngTuple;
  floor: "floor1" | "floor2" | "floor3" | "mainSecondFloor" | "waitingArea";
}

const divisions: Division[] = [
  { name: "PERSONNEL ADMINISTRATION SECTION", coordinates: [6, 1], floor: "floor1" },
  { name: "INTERNAL AUDIT UNIT", coordinates: [5.6, 1.8], floor: "floor1" },
  { name: "SPECIAL CONCERN SECTION", coordinates: [5.6, 2], floor: "floor1" },
  { name: "BREAST FEEDING ROOM", coordinates: [5.6, 2.5], floor: "floor1" },
  { name: "LEARNING & DEVELOPMENT SECTION", coordinates: [5, 1.2], floor: "floor1" },
  { name: "HUMAN RESOURCE WELFARE SECTION", coordinates: [4.5, 1.2], floor: "floor1" },
  { name: "CASH RELEASING OFFICE", coordinates: [4.5, 1.6], floor: "floor1" },
  { name: "CLINIC", coordinates: [4, 2], floor: "floor1" },
  { name: "HUMAN RESOURCES PLANNING & PERFORMANCE MANAGEMENT SECTION", coordinates: [3.8, 0.9], floor: "floor1" },
  { name: "PROPERTY AND SUPPLY OFFICE", coordinates: [7.4, 4.5], floor: "floor1" },
  { name: "DRMD WAREHOUSE OFFICE", coordinates: [8, 5.7], floor: "floor1" },
  { name: "KIOSK", coordinates: [4, 1.3], floor: "floor1" },
  { name: "COMMISION ON AUDIT OFFICE", coordinates: [8.5, 1], floor: "floor1" },

  // Floor 2 divisions
  { name: "SOCIAL MARKETING UNIT", coordinates: [5, 6], floor: "floor2" },
  { name: "RCC OFFICE", coordinates: [3, 6.5], floor: "floor2" },
  { name: "OFFICE 01", coordinates: [7, 6], floor: "floor2" },
  { name: "ACCOUNTING LIQUIDATION OFFICE", coordinates: [5, 3], floor: "floor2" },

  { name: "SUPPLEMENTAL FEEDING OFFICE", coordinates: [5.5, 7], floor: "floor3" },
  { name: "COMMUNITY BASE OFFICE", coordinates: [7, 5.5], floor: "floor3" },
  { name: "FINANCE DEPARTMENT", coordinates: [4.5, 5], floor: "floor3" },
  { name: "PROTECTIVE SERVICES DIVISION CHIEF OFFICE", coordinates: [4, 5.5], floor: "floor3" },
  { name: "CIS OFFICE", coordinates: [3, 2], floor: "floor3" },
  { name: "NHTS AREA", coordinates: [5, 2], floor: "floor3" },
  { name: "CIS LIQUIDATION AREA", coordinates: [5, 3.3], floor: "floor3" },

  { name: "hello", coordinates: [5, 3.3], floor: "mainSecondFloor" },

  { name: "TRAVEL CLEARANCE AREA", coordinates: [6, 3.3], floor: "waitingArea" },
  { name: "CRISIS INTERVENTION AREA", coordinates: [6.5, 7], floor: "waitingArea" },
  { name: "DRMD CONFERENCE ROOM", coordinates: [2, 3.5], floor: "waitingArea" },
  { name: "DRMIS OFFICE", coordinates: [3, 3], floor: "waitingArea" },
  { name: "DRMD DC OFFICE", coordinates: [3.5, 1.5], floor: "waitingArea" },
  { name: "DRRS OFFICE", coordinates: [5, 2], floor: "waitingArea" },
  { name: "RRLMS OFFICE", coordinates: [8, 2], floor: "waitingArea" },
];

const iconMarkup = ReactDOMServer.renderToStaticMarkup(
  <MdLocationOn style={{ color: "#007bff", fontSize: "60px" }} />
);
const customIcon = L.divIcon({
  html: iconMarkup,
  className: "custom-div-icon",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

const ZoomToDivision = ({ target }: { target: LatLngTuple | null }) => {
  const map = useMap();
  useEffect(() => {
    if (target) {
      map.setView(target, searchZoom, { animate: true });
    }
  }, [target, map]);
  return null;
};

const FloorPlanMap = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedDivision, setSearchedDivision] = useState<Division | null>(null);
  const [currentFloor, setCurrentFloor] = useState<"floor1" | "floor2" | "floor3" | "waitingArea" | "mainSecondFloor">("floor1");
  const [suggestions, setSuggestions] = useState<Division[]>([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);  // Track image loading state
  const fuse = useMemo(() => new Fuse(divisions, { keys: ["name"], threshold: 0.3 }), []);

  const handleSearch = () => {
    if (!searchTerm) {
      setSearchedDivision(null);
      setSuggestions([]);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const division = fuse.search(searchTerm).map(result => result.item)[0];
      if (division) {
        setSearchedDivision(division);
        setCurrentFloor(division.floor);
        setSuggestions([]);
        setIsSearchClicked(true);
      }
      setIsLoading(false);
    }, 2000); 
  };

  useEffect(() => {
    if (!searchTerm) {
      setSuggestions([]);
    } else {
      setSuggestions(fuse.search(searchTerm).map(result => result.item).slice(0, 5));
    }
  }, [searchTerm]);

  // Use the useEffect hook to listen for image load
  useEffect(() => {
    const img = new Image();
    img.src =
      currentFloor === "floor1"
        ? images.groundFloor
        : currentFloor === "floor2"
        ? images.secondFloor
        : images.thirdFloor
        ? images.waitingArea
        : images. mainSecondFloor;

    img.onload = () => {
      setImageLoaded(true);  // Set imageLoaded to true when the image is loaded
    };
  }, [currentFloor]);

  return (
    <div>
      {/* Search Bar */}
      <div className="relative w-full mb-4 mt-10">
        <input
          type="text"
          placeholder="Search divisions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-4 pr-10 border rounded-full w-full"
        />
        <button
          onClick={handleSearch}
          className="absolute flex items-center gap-1 justify-center right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full px-3 py-2"
        >
          <MdSearch className="h-5 w-6 font-semibold" />
          <span className="font-semibold">Search</span>
        </button>
        {suggestions.length > 0 && (
          <ul className="absolute left-0 w-full bg-white shadow-lg rounded-lg mt-1 z-[9999]">
            {suggestions.map((item, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSearchTerm(item.name);
                  setSearchedDivision(item);
                  setCurrentFloor(item.floor);
                  setSuggestions([]);
                  setIsSearchClicked(false);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Current Floor Display */}
      <div className="mb-2 p-2 bg-gray-200 rounded-lg text-center font-semibold">
      Current Floor :  
        {currentFloor === "floor1"
          ? "Main Ground Floor"
          : currentFloor === "floor2"
          ? "Annex Second Floor"
          : currentFloor === "floor3"
          ? "Annex Third Floor"
          : currentFloor === "mainSecondFloor"
          ? "Main Second Floor"
          : "Annex Building Ground Floor"}
      </div>

      {/* Loader */}
      {isLoading ? (
        <div className="flex justify-center items-center h-60">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <MapContainer center={center} zoom={defaultZoom} style={{ height: "600px", width: "100%" }} crs={CRS.Simple}>
          <ImageOverlay
            url={imageLoaded
              ? currentFloor === "floor1"
                ? images.groundFloor
                : currentFloor === "floor2"
                ? images.secondFloor
                : currentFloor === "floor3"
                ? images.thirdFloor
                : currentFloor === "mainSecondFloor"
                ? images.mainSecondFloor
                : images.waitingArea
              : images.groundFloor // Show placeholder while loading
            }
            bounds={floorPlanBounds}
          />

          {searchedDivision && (
            <Marker position={searchedDivision.coordinates} icon={customIcon}>
              <Popup>{searchedDivision.name}</Popup>
            </Marker>
          )}

          {isSearchClicked && <ZoomToDivision target={searchedDivision?.coordinates || null} />}
        </MapContainer>
      )}
    </div>
  );
};

export default FloorPlanMap;
