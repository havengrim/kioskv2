import  { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FaUser } from "react-icons/fa";
import KioskDashboard from "@/KioskDashboard";
import images from "@/assets/images";


type Position = {
  name: string;
  count: number;
};

const Example = () => {
  const [positions, setPositions] = useState<Position[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      const url = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

      try {
        const response = await axios.get(url);

        const fetchedData = response.data;
        if (fetchedData && fetchedData.data) {
          const positionsArray: Position[] = [];
          for (let i = 1; i <= 24; i++) {
            const position = fetchedData.data[`position${i}`];
            if (position) {
              positionsArray.push({
                name: position.name || "N/A",
                count: position.number || 0,
              });
            }
          }
          setPositions(positionsArray);
        } else {
          console.warn("Unexpected response structure:", fetchedData);
        }
      } catch (err) {
        console.error("Error fetching data from Google Apps Script:", err);
      }
    };

    fetchEmployeeData();
  }, []);

  return (
    <section className="grid place-content-center p-12">
      <FloatingPhone openDialog={() => setIsDialogOpen(true)} />
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">All Positions</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 w-[700px] gap-4 max-[500px]:grid-cols-1 px-3">
            {positions.map((position, index) => (
              <div
                key={index}
                className="group w-full rounded-lg bg-gradient-to-r from-violet-600 to-indigo-500 p-5 transition duration-300 hover:translate-y-[-5px] hover:shadow-xl hover:scale-105 relative cursor-pointer"
              >
                <p className="text-white text-3xl font-semibold">{position.count}</p>
                <p className="text-white text-sm mt-2">{position.name}</p>
                <FaUser className="group-hover:opacity-100 absolute right-[10%] top-[50%] translate-y-[-50%] opacity-20 transition group-hover:scale-110 duration-300" size={40} color="#fff" />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

const FloatingPhone = ({ openDialog }: { openDialog: () => void }) => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-violet-500 z-50"
    >
      <motion.div
        initial={{ transform: "translateZ(8px) translateY(-2px)" }}
        animate={{ transform: "translateZ(32px) translateY(-8px)" }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 2, ease: "easeInOut" }}
        className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen openDialog={openDialog} />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute left-3 top-2 z-10 flex gap-2">
        <img src={images.DSWDLogo} alt="" className="w-12 h-4 ml-1" />
      </div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  );
};

const Screen = ({ openDialog }: { openDialog: () => void }) => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      <div className="text-center">
      <h4 className="font-extrabold text-6xl">
            <KioskDashboard />
        </h4>
        <h4 className="font-bold">Total Employees</h4>
      </div>
      <button
        onClick={openDialog}
        className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-3 text-sm font-medium text-violet-500 shadow-md hover:bg-violet-50 transition-colors"
      >
        Show All List
      </button>
      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-violet-500" />
    </div>
  );
};

export default Example;
