import { MapContainer, ImageOverlay, Marker, Popup, useMap } from "react-leaflet";
import { CRS, LatLngBoundsExpression, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import ReactDOMServer from "react-dom/server";
import { MdSearch, MdInfoOutline } from "react-icons/md";
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
  position: string;
  coordinates: LatLngTuple;
}

const divisions: Division[] = [
  { name: "VENUS F. REBULDELA", position: "Regional Director", coordinates: [8, 5.7] },
  { name: "PAULA MARIE S. LASCANO", position: "Regional Executive Assistant", coordinates: [7.8, 6.7] },
  { name: "VILMA R. SERRANO", position: "OIC - DIVISION CHIEF", coordinates: [7, 1] },
  { name: "PAUL JESSIE P. CRUZ", position: "Policy Development and Planning Section", coordinates: [6.6, 0.8] },
  { name: "KEVIN JAMES M. ROQUE", position: "National Household Targeting Section", coordinates: [6.3, 0.8] },
  { name: "JAN MICHAEL P. GOPEZ ", position: "Information and Communication Targeting Section", coordinates: [5.9, 0.8] },
  { name: "CHRISTOPHER M. GALGO ", position: "Standard Section", coordinates: [5.3, 0.8] },
  { name: "SHEILA JAEN B. BASILLA", position: "Management and Audit Analyst II", coordinates: [7, 2] },
  { name: "WINNA LYN G. QUILLANO", position: "Technical advisory assistance and other related support services", coordinates: [7, 3] },
  { name: "ATTY. MHEL ROSE CAMILLE G. GRANDE", position: "Legal Unit", coordinates: [7, 4.3] },
  { name: "ALEXINE BIANCA RDS. CASTANEDA", position: "Social Marketing Unit", coordinates: [7, 5.3] },
  { name: "ROSEMARIE C. FABRO", position: "Regional Sub-Commitee for the Welfare of children", coordinates: [7, 6.5] },
  { name: "IMELDA E. YUMUL", position: "Regional Juvenile Justice and Welfare Comittee", coordinates: [7, 8] },
  { name: "CZAR CORNELIUS R. DAVID", position: "INNOVASION DIVISION", coordinates: [7, 9.5] },
  { name: "MAYNARD A. CEZAR", position: "EPAHP PROGRAM OFFICE", coordinates: [6.6, 9.5] },
  { name: "KRISTA ANGELI M. DIMAUN", position: "SOCIAL TECHNOLOGY UNIT", coordinates: [6.2, 9.5] },
  { name: "CHRISTIAN JOY G. SOLIMAN", position: "TARA BASA TUTORING PROGRAM", coordinates: [5.8, 9.5] },
  { name: "KRISTA ANGELI M. DIMAUN", position: "PAG-ABOT PROGRAM", coordinates: [5.5, 9.5] },

  { name: "ARMONT C. PECINA", position: "Assistant Regional Director for Operations", coordinates: [4.8, 2.5] },
  { name: "MARIBEL M. BLANCO", position: "Assistant Regional Director for Administration", coordinates: [4.8, 8.5] },
  { name: "JENNIFER C. MORALES", position: "Human Resource Management and Development Division", coordinates: [3.8, 9.5] },
  { name: "ALLAIN R. MALIT", position: "Administrative Division", coordinates: [3.8, 8.4] },
  { name: "KEISHA M. NGUYEN", position: "Financial Management Division", coordinates: [3.8, 7.3] },
  { name: "JOSEPHINE C. DELA TONGA", position: "Pantawid Pamilyang Pilipino Program Management Office", coordinates: [3.8, 5.8] },
  { name: "SUSAN S. HERNANDEZ", position: "Promotive Services Divison", coordinates: [3.8, 4.6] },
  { name: "ALLYP ALBERT L. BAYBAYAN", position: "Disaster Response Management Division", coordinates: [3.8, 3.6] },
  { name: "PRISCILA C. TIOPENGCO", position: "Protective Service Division", coordinates: [3.8, 2.3] },
  { name: "MARGIE Y. NORTEZ", position: "SWAD Aurora", coordinates: [3.8, 1.1] },
  { name: "MONETTE D. GANTANG", position: "SWAD Bataan", coordinates: [3.2, 1.1] },
  { name: "LAWRENCE CHRISTORPHER G. MENDIGORIN", position: "SWAD Bulacan", coordinates: [2.9, 1.1] },
  { name: "AURELIA C. SENAYO", position: "SWAD Nueva Ecija", coordinates: [2.1, 1.1] },
  { name: "MARIA FE C. EVARISTO", position: "SWAD Pampanga", coordinates: [1.5, 1.1] },
  { name: "RAUL O. REGALADO", position: "SWAD Tarlac", coordinates: [0.9, 1.1] },

  { name: "ROWENA L. APOLTO", position: "SWAD Bataan", coordinates: [3.4, 1.8] },
  { name: "LUCRECIA M. CRUZ", position: "Reception and Study Center for Children", coordinates: [2.9, 1.8] },
  { name: "EMELITA C. BOLIVAR", position: "Regional Home for Girls", coordinates: [2.4, 1.8] },
  { name: "ROBERT V. GATMAITAN", position: "Regional Rehabilitation Center for the Youth", coordinates: [2.0, 1.8] },
  { name: "DIVINA P. SOLIS", position: "Haven for Girls", coordinates: [1.6, 1.8] },
  { name: "JACQUELINE C. BAUTISTA", position: "Tarlac Home for Women", coordinates: [1.1, 1.8] },
  { name: "GERRY S. LIANGCO", position: "Tarlac Lingap Center", coordinates: [0.7, 1.8] },

  { name: "EARVIN NIGEL P. BUNDALIAN", position: "OIC - Regional Center Coordinator", coordinates: [3.4, 2.3] },
  { name: "MARITES D. LIWANAG", position: "Community - Based Section", coordinates: [2.9, 2.3] },
  { name: "FRITZIE JOY E. CUNANAN", position: "Crisis Intervention Section", coordinates: [2.5, 2.3] },
  { name: "JASPER P. NICOLAS", position: "Social Pension Program Management Office", coordinates: [2.1, 2.3] },
  { name: "KAREN NINA B. ALVARADO", position: "Minors Traveling Abroad", coordinates: [1.6, 2.3] },

  { name: "CLENSON B. TIBANGAY", position: "Disaster Response and Rehabilitation", coordinates: [3.4, 3.3] },
  { name: "JAYLI M. MENDOZA", position: "Disaster Response Information and Management Section", coordinates: [2.9, 3.3] },
  { name: "ENGR. ROMAR Y. MAGAT", position: "Regional Resource Operations", coordinates: [2.4, 3.3] },

  { name: "WILMA T. GUTIERREZ", position: "Sustainable Livelihood Program Office", coordinates: [3.4, 4.6] },
  { name: "ALADIN L. NAJE", position: "KALAHI-CIDSS Program Office", coordinates: [2.9, 4.6] },

  { name: "CARLA M. FIGUEROA", position: "Case Management, Services, Social Development, and Advocacy Section", coordinates: [3.4, 5.6] },
  { name: "EMERSON A. ANGELES", position: "Data Management and Integration Section", coordinates: [2.9, 5.6] },
  { name: "DOMINADOR P. MATEO", position: "Cash Grant Section", coordinates: [2.6, 5.6] },

  { name: "ANGELICA T. LAFUENTE", position: "Accounting Section", coordinates: [3.4, 7.1] },
  { name: "RAYMUND VINCENT A. PANLILIO", position: "Budget Section", coordinates: [3.0, 7.1] },
  { name: "RENANN M. MACAPINLAC", position: "Cash Section", coordinates: [2.6, 7.1] },

  { name: "CHARO C. MAGCAMIT", position: "General Services Section", coordinates: [3.4, 8.2] },
  { name: "MARY CHRISTIE V. TORNO", position: "Property and Supply Section", coordinates: [3.0, 8.2] },
  { name: "MYRNA S. SAMPANG", position: "Records and Archives Management Section", coordinates: [2.6, 8.2] },
  { name: "ADRIAN D. MORALES", position: "Procurement Section", coordinates: [2.0, 8.2] },
  { name: "ENGR. CLEENTON P. CORONEL", position: "Building and Grounds Management Section", coordinates: [1.6, 8.2] },

  { name: "JOBELE DIANA D. QUITO", position: "Personnel Administrative Section", coordinates: [3.4, 9.3] },
  { name: "THEA MARIA RICA S. DEL ROSARIO", position: "Human Resource Planning and Performance Management Section", coordinates: [3.0, 9.3] },
  { name: "HELEN PATRICIA O. MANALAC", position: "Human Resource Welfare Section", coordinates: [2.4, 9.3] },
  { name: "SHEILA S. LACSON", position: "Learning and Development Section", coordinates: [2.0, 9.3] },
];

const iconMarkup = ReactDOMServer.renderToStaticMarkup(
  <MdInfoOutline style={{ color: "#007bff", fontSize: "20px" }} />
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

const OrgChart = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedDivision, setSearchedDivision] = useState<Division | null>(null);
  const [suggestions, setSuggestions] = useState<Division[]>([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const fuse = useMemo(
    () => new Fuse(divisions, { keys: ["name", "position"], threshold: 0.3 }),
    []
  );

  const handleSearch = (query?: string) => {
    const searchValue = query || searchTerm;
    if (!searchValue) {
      setSearchedDivision(null);
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const division = fuse.search(searchValue).map((result) => result.item)[0];
      if (division) {
        setSearchedDivision(division);
        setSuggestions([]);
        setIsSearchClicked(true);
      }
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (!searchTerm) {
      setSuggestions([]);
    } else {
      setSuggestions(fuse.search(searchTerm).map((result) => result.item).slice(0, 5));
    }
  }, [searchTerm]);

  useEffect(() => {
    const img = new Image();
    img.src = images.orgChart;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="w-full mb-40">
      <div className="relative w-full z-[9999] flex flex-col bg-white shadow-md p-2 rounded-lg mb-5">
        {/* Search Input */}
        <div className="flex items-center">
          <input
            type="text"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none w-full"
            placeholder="Search by name or position..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => handleSearch()} className="ml-2 p-2 bg-blue-500 text-white rounded-lg flex items-center">
            {isLoading ? (
              <span className="flex items-center w-[90px]">
                <MdSearch className="mr-1" /> Searching...
              </span>
            ) : (
              <>
                <MdSearch className="mr-1" /> Search
              </>
            )}
          </button>
        </div>

        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <ul className="absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-[9999] max-h-40 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSearchTerm(`${suggestion.name} - ${suggestion.position}`);
                  handleSearch(suggestion.name);
                }}
              >
                <strong>{suggestion.name}</strong> - {suggestion.position}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Map Section */}
      <div>
        <MapContainer
          center={center}
          zoom={defaultZoom}
          style={{ height: "500px", width: "100%" }}
          crs={CRS.Simple}
        >
          {searchedDivision && <ZoomToDivision target={searchedDivision.coordinates} />}

          {imageLoaded && (
            <ImageOverlay
              url={images.orgChart}
              bounds={floorPlanBounds}
              className="absolute inset-0 w-full h-full"
            />
          )}

          {isSearchClicked && searchedDivision && (
            <Marker position={searchedDivision.coordinates} icon={customIcon}>
              <Popup>
                <div className="text-center">
                  <strong>{searchedDivision.name}</strong>
                  <br />
                  <span>{searchedDivision.position}</span>
                </div>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default OrgChart;
