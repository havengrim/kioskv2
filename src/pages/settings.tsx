
import { ModeToggle } from "@/components/mode-toggle";
import Sidebar from "@/components/sidebar";

const Settings = () => {
  return (
    <div className="flex flex-col dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      <div className="w-full p-8  dark:bg-gray-900 dark:text-white h-screen">
        <div className="container mx-auto p-4 lg:pl-20">
          <h1 className="text-3xl font-bold mb-8 text-gray-700 dark:text-gray-300">
            Settings
          </h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Choose Your Theme</h2>
            <p className="text-gray-700 dark:text-gray-400 mb-4">
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
