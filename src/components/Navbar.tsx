
import { NavLink } from "react-router-dom";
import images from "@/assets/images";

const Navbar = () => {
  return (
    <nav className="z-50 bg-white dark:bg-gray-900">
      <div className="container flex flex-col items-center p-6 mx-auto">
        {/* Logos */}
        <div className="flex w-full justify-center items-center gap-6">
          <img
            src={images.bagongPilipinas}
            alt="Bagong Pilipinas Logo"
            className="h-14 w-16"
          />
          <img
            src={images.DSWDLogo}
            alt="DSWD Logo"
            className="h-12 w-40 mt-4"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `mx-2 sm:mx-6 border-b-2 ${
                isActive
                  ? "border-blue-500 text-gray-800 dark:text-gray-200"
                  : "border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
              }`
            }
          >
            home
          </NavLink>
          <NavLink
            to="/info"
            className={({ isActive }) =>
              `mx-2 sm:mx-6 border-b-2 ${
                isActive
                  ? "border-blue-500 text-gray-800 dark:text-gray-200"
                  : "border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
              }`
            }
          >
            info
          </NavLink>
          <NavLink
            to="/feedback"
            className={({ isActive }) =>
              `mx-2 sm:mx-6 border-b-2 ${
                isActive
                  ? "border-blue-500 text-gray-800 dark:text-gray-200"
                  : "border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
              }`
            }
          >
            Feedback
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `mx-2 sm:mx-6 border-b-2 ${
                isActive
                  ? "border-blue-500 text-gray-800 dark:text-gray-200"
                  : "border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
              }`
            }
          >
            settings
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
