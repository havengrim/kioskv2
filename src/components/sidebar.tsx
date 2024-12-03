
import images from "@/assets/images";
import {
  HiOutlineHome,
  HiOutlineCog,
} from "react-icons/hi2";
import { LuNewspaper } from "react-icons/lu";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0">

        <aside className="flex flex-col items-center w-16 h-screen py-8 overflow-y-auto bg-white border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700">
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
            <LuNewspaper className="w-6 h-5" />
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
            href="/about"
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
