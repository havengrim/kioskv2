
import {
  HiOutlineHome,
  HiOutlineChartBar,
  HiOutlineClipboard,
  HiOutlineCog,
  HiOutlineLightBulb,
  HiOutlineUserCircle,
} from "react-icons/hi2";

const Sidebar = () => {
  return (
    <div className="fixed w-full left-0 top-0">

        <aside className="flex flex-col items-center w-16 h-screen py-8 overflow-y-auto bg-white border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700">
        <nav className="flex flex-col items-center flex-1 space-y-6">
            {/* Logo */}
            <a href="#">
            <img
                className="w-auto h-6"
                src="https://merakiui.com/images/logo.svg"
                alt="Logo"
            />
            </a>

            {/* Navigation Links */}
            <a
            href="#"
            className="p-1.5 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100 flex flex-col items-center"
            >
            <HiOutlineHome className="w-6 h-6" />
            <span className=" font-regular">Home</span>
            </a>

            <a
            href="#"
            className="p-1.5 text-gray-700 transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
            >
            <HiOutlineChartBar className="w-6 h-6" />
            </a>

            <a
            href="#"
            className="p-1.5 text-gray-700 transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
            >
            <HiOutlineClipboard className="w-6 h-6" />
            </a>

            <a
            href="#"
            className="p-1.5 text-gray-700 transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
            >
            <HiOutlineCog className="w-6 h-6" />
            </a>

            <a
            href="#"
            className="p-1.5 text-gray-700 transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
            >
            <HiOutlineLightBulb className="w-6 h-6" />
            </a>
        </nav>

        {/* Footer */}
        <div className="flex flex-col space-y-6">
            <a
            href="#"
            className="p-1.5 text-gray-700 transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
            >
            <HiOutlineCog className="w-6 h-6" />
            </a>

            <a
            href="#"
            className="p-1.5 text-gray-700 transition-colors duration-200 rounded-lg dark:text-gray-200 dark:bg-gray-800 bg-gray-100"
            >
            <HiOutlineLightBulb className="w-6 h-6" />
            </a>

            <a href="#">
            <HiOutlineUserCircle className="w-8 h-8 text-gray-700 dark:text-gray-200" />
            </a>
        </div>
        </aside>
    </div>
  );
};

export default Sidebar;
