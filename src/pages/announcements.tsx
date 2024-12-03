
import Sidebar from '@/components/sidebar'; // Import Sidebar

const Announcement = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <div className="container mx-auto p-4 lg:pl-20">
        <div>Announcements</div>
      </div>
    </div>
  );
};

export default Announcement;
