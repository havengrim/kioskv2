import images from "@/assets/images";



const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900">
      <div className="container flex flex-col items-center p-6 mx-auto">
      <div className="flex w-full justify-center items-center gap-6">
          <img src={images.bagongPilipinas} alt="Bagong Pilipinas Logo" className="h-14 w-16" />
          <img src={images.DSWDLogo} alt="DSWD Logo" className="h-12 w-40 mt-4" />
        </div>

        <div className="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
          <a
            href="/"
            className="mx-2 text-gray-800 border-b-2 border-blue-500 dark:text-gray-200 sm:mx-6"
          >
            home
          </a>

          <a
            href="/announcements"
            className="mx-2 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6"
          >
            news
          </a>

          <a
            href="#"
            className="mx-2 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6"
          >
            announcements
          </a>

          <a
            href="/settings"
            className="mx-2 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6"
          >
            settings
          </a>

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
