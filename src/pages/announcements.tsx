import Sidebar from "@/components/sidebar";

const Home = () => {
  return (
    <div className="flex min-h-screen">
        <Sidebar />
      {/* Main content container */}
      <div className="container mx-auto p-4 pl-20">
        <h1 className="text-3xl font-semibold">Main Content Area</h1>
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Home;
