
import Sidebar from "@/components/sidebar"; // Your sidebar component

const Announcements = () => {
 

  return (
    <div className="flex">
      {/* Sidebar with fixed width */}
      <div className="w-16">
        <Sidebar />
      </div>

      {/* Fullscreen Swiper taking the remaining space */}
      <div className="flex-grow h-screen">
       sds
      </div>
    </div>
  );
};

export default Announcements;
