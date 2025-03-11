import { useState, useEffect } from "react";
import Fuse from "fuse.js";
import Navbar from "@/components/Navbar";
import Calendar from "./Calendar";
import { Card, CardContent } from "@/components/ui/card";
// import images from "@/assets/images";
// // Import pan and pinch components
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import { BiReset, BiPlus, BiMinus, BiTargetLock } from "react-icons/bi";
import FloorPlanMap from "@/components/FloorPlanMap";
import OrgChart from "@/components/OrgChart";

// Telephone Data Array

const offices = [
  { name: "Office of the Administrative Division Chief", phone: "120", fax: "ADMIN - DC" },
  { name: "General Services Section", phone: "126", fax: "ADMIN - GS" },
  { name: "Office of the Assistant Regional Director for Administration", phone: "110", fax: "ARDA's - ADMIN" },
  { name: "Budget Section", phone: "109", fax: "BS" },
  { name: "Cash - Releasing", phone: "125", fax: "CASH - RELEASING" },
  { name: "Crisis Intervention Section - Liquidation", phone: "137", fax: "CIS - LIQUIDATION" },
  { name: "Crisis Intervention Section", phone: "139", fax: "CIS / AICS" },
  { name: "Commission on Audit Office", phone: "118", fax: "COA" },
  { name: "Office of the Disaster Response Management", phone: "105", fax: "DRMD - DC" },
  { name: "Guard - Extension Building", phone: "133", fax: "EXTENSION BUILDING" },
  { name: "Financial Management Division", phone: "153", fax: "FMD" },
  { name: "Human Resource Planning and Performance Management Section", phone: "121", fax: "HRMD" },
  { name: "Human Resource Welfare Section", phone: "111", fax: "HRWS" },
  { name: "Human Resource Welfare Section - Clinic", phone: "143", fax: "HRWS - CLINIC" },
  { name: "Internal Audit Unit", phone: "128", fax: "IAU" },
  { name: "ICTMS Section", phone: "159", fax: "ICTMS" },
  { name: "Learning and Development Section", phone: "111", fax: "LDS" },
  { name: "Legal Unit", phone: "114", fax: "LEGAL" },
  { name: "Main Building - Guard", phone: "112", fax: "MAIN BUILDING" },
  { name: "Office of the Regional Director", phone: "154", fax: "ORD - ADMIN" },
  { name: "Regional Center Coordinator", phone: "152", fax: "RCC" },
  { name: "Budget Reviewers Office", phone: "102", fax: "BUDGET REVIEWERS" },
  { name: "Personnel Administration Section", phone: "129", fax: "PAS" },
  { name: "Office of the Protective Services Division Chief", phone: "144", fax: "PROTECTIVE - DC" },
  { name: "Procurement Section", phone: "142", fax: "PROCUREMENT SECTION" },
  { name: "Property and Supply Section", phone: "119", fax: "PSS" },
  { name: "Records and Archives Management Section", phone: "112", fax: "RAMS" },
  { name: "Social Technology Unit", phone: "155", fax: "SOCTECH" },
  { name: "Bids and Awards Committee", phone: "127", fax: "BAC" },
  { name: "Travel Clearance", phone: "151", fax: "TRAVEL" },
  { name: "Accounting Section", phone: "104", fax: "ACCOUNTING" },
  { name: "Technical Assistance and Advisory", phone: "147", fax: "TAAORS" },
  { name: "Regional Resource Logistic Management Section", phone: "136", fax: "DRRS/RRLMS" },
  { name: "Innovation Division", phone: "148", fax: "T8TP - RPMO / PAG ABOT" },
  { name: "Disaster Response and Information Management Section", phone: "117", fax: "DRIMS-DRMD" },
  { name: "Human Resource - ODC", phone: "115", fax: "HR-ODC" }
];

const Info = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(3); // Default to 3 offices
  const [fade, setFade] = useState(false); // State to trigger fade-in animation

  // Fuse.js options
  const fuse = new Fuse(offices, {
    keys: ["name", "phone", "fax"],
    includeScore: true,
    threshold: 0.4,
  });

  const searchResults = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : offices;

  const visibleOffices = searchResults.slice(0, visibleCount); // Show only the visibleCount offices

  const handleShowMore = () => {
    setVisibleCount(visibleCount + 3); // Load 3 more offices
  };

  // Trigger fade effect when searchTerm changes
  useEffect(() => {
    setFade(false); // Reset fade-out effect
    const timeout = setTimeout(() => setFade(true), 300); // Trigger fade-in effect after 300ms
    return () => clearTimeout(timeout); // Clean up timeout on component unmount
  }, [searchTerm]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 lg:pl-10">
        <h1 className="mt-10 font-bold mb-4 text-3xl sm:text-4xl leading-tight text-gray-700 dark:text-gray-300 text-center">
        DSWD Office Guide & Map
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
        Lost? Use this map to find your way around the DSWD office.
        </p>
      <FloorPlanMap />
      </div>
      <div className="container mx-auto p-4 lg:pl-20">
        <h1 className="mt-10 font-bold mb-4 text-3xl sm:text-4xl leading-tight text-gray-700 dark:text-gray-300 text-center">
          DSWD Regional Office Contact Numbers
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
          Reach out to the right department using the local numbers below.
        </p>

        {/* Search input */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search by name, phone, or fax"
            className="p-2 w-full sm:w-1/2 lg:w-1/3 border rounded-md shadow-sm dark:bg-gray-800 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Grid of office cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {visibleOffices.map((office, index) => (
            <Card key={index} className="shadow-md border rounded-xl">
              <CardContent className="flex flex-col items-center justify-between h-full gap-3">
                {/* Phone Number in a Circle */}
                <div className="mt-5 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-2xl font-bold shadow-md">
                  {office.phone}
                </div>
                <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">
                  {office.name}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">📠 {office.fax}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More button */}
        {visibleCount < searchResults.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleShowMore}
              className="text-blue-600 dark:text-blue-300 font-semibold"
            >
              Show More
            </button>
          </div>
        )}

        <Calendar />
      </div>

      {/* Wrap the orgChart image with TransformWrapper and TransformComponent for pan and pinch functionality */}
      <div className="mt-10 mx-auto w-full max-w-6xl">
        {/* <TransformWrapper>
          {({ zoomIn, zoomOut, resetTransform, centerView }) => (
            <div className="relative">
      
              <div className="absolute top-2 left-2 flex flex-col gap-2 z-10">
                <button onClick={() => zoomIn()} className="p-2 bg-green-500 text-white rounded-md">
                  <BiPlus className="text-lg" />
                </button>
                <button onClick={() => zoomOut()} className="p-2 bg-red-500 text-white rounded-md">
                  <BiMinus className="text-lg" />
                </button>
                <button onClick={() => centerView(500)} className="p-2 bg-purple-500 text-white rounded-md">
                  <BiTargetLock className="text-lg" />
                </button>
                <button onClick={() => resetTransform(500)} className="p-2 bg-gray-500 text-white rounded-md">
                  <BiReset className="text-lg" />
                </button>
              </div>

              <TransformComponent>
                <img src={images.orgChart} alt="Organization Chart" className="w-full" />
              </TransformComponent>
            </div>
          )}
        </TransformWrapper> */}
        <OrgChart />
      </div>
    </div>
  );
};

export default Info;
