
import images from "@/assets/images";
import {
  HiOutlineHome,
  HiOutlineCog,
} from "react-icons/hi2";
import { GoStack } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { TbPhoto } from "react-icons/tb";
const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 bg-gray-100">

        <aside className="flex flex-col items-center w-16 h-screen py-8 overflow-y-auto bg-gray-100 border-r rtl:border-l rtl:border-r-0 dark:bg-gray-800 dark:border-gray-700">
        <nav className="flex flex-col items-center flex-1 space-y-6">
            {/* Logo */}
            <a href="#">
            <img
                className="w-auto h-10"
                src={images.logo}
                alt="Logo"
            />
            </a>

            {/* Navigation Links */}
            <a
            href="/"
            className="p-1.5 text-gray-700 transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100 flex flex-col items-center"
            >
            <HiOutlineHome className="w-6 h-6" />
            <span className=" font-regular text-sm">Home</span>
            </a>

            <a
            href="/announcements"
            className="p-1.5 text-gray-700 transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100 flex flex-col items-center"
            >
            <GoStack className="w-6 h-6" />
            <span className=" font-regular text-sm">News</span>
            </a>

            <a
            href="/about"
            className="p-1.5 text-gray-700 transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100 flex flex-col items-center"
            >
            <IoIosHelpCircleOutline className="w-6 h-6" />
            <span className=" font-regular text-sm">About</span>
            </a>

            <a
            href="/gallery  "
            className="p-1.5 text-gray-700 transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100 flex flex-col items-center"
            >
            <TbPhoto className="w-6 h-6" />
            <span className=" font-regular text-sm">Gallery</span>
            </a>

            <a
            href="/settings"
            className="p-1.5 text-gray-700 transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100 flex flex-col items-center"
            >
            <HiOutlineCog className="w-6 h-6" />
            <span className=" font-regular text-sm">Settings</span>
            </a>


         
        </nav>

        </aside>
    </div>
  );
};

export default Sidebar;
