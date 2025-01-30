import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import KioskDashboard from "@/KioskDashboard";
import images from "@/assets/images";

import { Badge } from "./ui/badge";

type Position = {
  name: string;
  filled: number;
  unfilled: number;
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
          for (let i = 1; i <= 25; i++) {
            const position = fetchedData.data[`position${i}`];
            if (position) {
              positionsArray.push({
                name: position.name || "N/A",
                filled: position.filled || 0,
                unfilled: position.vacant || 0
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
            <DialogTitle className="text-lg font-bold">All Divisions</DialogTitle>
          </DialogHeader>

          <div className="overflow-x-auto px-1">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400 border-collapse border border-gray-200 dark:border-gray-600">
              <thead className="bg-gradient-to-r from-violet-600 to-indigo-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-lg font-medium">Position</th>
                  <th className="px-6 py-4 text-lg font-medium">Filled</th>
                  <th className="px-6 py-4 text-lg font-medium text-center">Unfilled</th>
                </tr>
              </thead>
              <tbody>
                {positions.length > 0 ? (
                  positions.map((position, index) => (
                    <tr
                      key={index}
                      className="group bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600 transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-md"
                    >
                      <td className="px-6 py-4 font-semibold text-gray-800 dark:text-white">
                        {position.name}
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="secondary">{position.filled}</Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="outline">{position.unfilled}</Badge>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="px-6 py-4 text-center text-gray-500" colSpan={3}>
                      No division found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
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
      className="rounded-[24px] bg-violet-500 z-25"
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
        <h4 className="font-bold dark:text-black">Total Employees</h4>
      </div>
      <button
        onClick={openDialog}
        className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-3 text-sm font-medium text-violet-500 shadow-md hover:bg-violet-50 transition-colors"
      >
        Show All Division
      </button>
      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-violet-500" />
    </div>
  );
};

export default Example;
