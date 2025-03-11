import { twMerge } from "tailwind-merge";
import axios from "axios";
import { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi"; // New modern icon

interface RowData {
  Title: string;
  Filled: number;
  Unfilled: number | "N/A";
  Total: number;
}

const GridLayout = () => {
  return (
    <div className="flex px-6 py-16 text-zinc-900">
      <div className="mx-auto w-full grid grid-cols-12 gap-6">
        <HeaderBlock />
        <SocialsBlock />
      </div>
    </div>
  );
};

const Block: React.FC<any> = ({ className = "", children, ...rest }) => {
  return (
    <div
      className={twMerge(
        "col-span-3 rounded-xl p-6 flex flex-col items-center justify-center",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

const HeaderBlock = () => {
  const [row4Data, setRow4Data] = useState<RowData | null>(null);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      const url = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      try {
        const response = await axios.get(url);
        const fetchedData = response.data;

        if (fetchedData?.additionalData) {
          setRow4Data(fetchedData.additionalData.row4 as RowData | null);
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
    <Block className="col-span-3 md:col-span-3">
      {row4Data && (
        <div className="flex flex-col items-center">
          <FiUsers className="text-4xl text-zinc-500 mb-3" /> {/* New modern icon */}
          <h1 className="mb-2 text-5xl font-extrabold text-zinc-900 dark:text-zinc-400 ">
            {row4Data.Filled}
          </h1>
          <p className="text-sm font-medium text-zinc-500">{row4Data.Title}</p>
        </div>
      )}
    </Block>
  );
};

const SocialsBlock = () => {
  const [rowData, setRowData] = useState<Record<string, RowData>>({});

  useEffect(() => {
    const fetchEmployeeData = async () => {
      const url = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      try {
        const response = await axios.get(url);
        const fetchedData = response.data;

        if (fetchedData?.additionalData) {
          const extractedData: Record<string, RowData> = {};
          for (let i = 6; i <= 8; i++) {
            const rowKey = `row${i}`;
            if (fetchedData.additionalData[rowKey]) {
              extractedData[rowKey] = fetchedData.additionalData[rowKey];
            }
          }
          setRowData(extractedData);
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
    <>
      {Object.keys(rowData).map((key) => (
        <Block key={key} className="col-span-3 md:col-span-3">
          <FiUsers className="text-4xl text-zinc-500 mb-3" /> {/* New modern icon */}
          <h1 className="text-5xl font-extrabold dark:text-zinc-400 text-zinc-900">
            {rowData[key].Filled}
          </h1>
          <p className="text-sm font-medium text-zinc-500 text-center">{rowData[key].Title}</p>
        </Block>
      ))}
    </>
  );
};

export default GridLayout;
