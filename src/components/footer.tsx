
const Footer = () => {
  return (
    <footer className="dark:bg-gray-800 dark:text-white py-6 text-center bg-gray-100 text-gray-800">
        <div className="max-w-screen-xl mx-auto px-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Department of Social Welfare and Development (DSWD). All rights reserved.
          </p>
          <p className="text-xs mt-1">
            Government Center, Maimpis, City of San Fernando Pampanga
          </p>
        </div>
      </footer>
  );
};

export default Footer;
