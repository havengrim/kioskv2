
import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "@/components/Navbar";

const Settings = () => {
  return (
    <div className="flex flex-col dark:bg-gray-900">
      {/* Sidebar */}
      <Navbar />

      <div className="w-full p-8  dark:bg-gray-900 dark:text-white h-screen">
        <div className="container mx-auto p-4 lg:pl-20">
        <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-center text-gray-800 dark:text-gray-200 mb-3">
          Settings
        </h2>

          <div className="mb-14">
            <p className="text-gray-700 dark:text-gray-400 mb-4 text-center">
              Toggle between Light and Dark themes to personalize your experience.
            </p>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
