import { ModeToggle } from "@/components/mode-toggle";
import Sidebar from "@/components/sidebar";

const Settings = () => {
  return (
    <div className="flex dark:bg-gray-900 h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="w-full p-8  dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-gray-700 dark:text-gray-300 text-center">
            Settings
          </h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Choose Your Theme</h2>
            <p className="text-gray-700 dark:text-gray-400 mb-4">
              Toggle between Light and Dark themes to personalize your experience.
            </p>
            <ModeToggle />
          </div>

          {/* Additional sections can go here */}
        </div>
      </div>
    </div>
  );
};

export default Settings;
