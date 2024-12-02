
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* DSWD Logo and About */}
          <div>
            <h2 className="text-lg font-bold">Department of Social Welfare and Development</h2>
            <p className="mt-2 text-sm">
              Working towards the empowerment of the poor, vulnerable, and disadvantaged communities.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-bold">Contact Information</h2>
            <ul className="mt-2 text-sm">
              <li>📍 DSWD Central Office, Quezon City, Philippines</li>
              <li>📞 +63 2 931 8101</li>
              <li>📧 <a href="mailto:info@dswd.gov.ph" className="text-blue-400">info@dswd.gov.ph</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-lg font-bold">Follow Us</h2>
            <ul className="mt-2 flex space-x-4">
              <li>
                <a href="https://facebook.com/dswdserves" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/dswdserves" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com/dswdserves" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-sm border-t border-gray-600 pt-4">
          <p>© {new Date().getFullYear()} Department of Social Welfare and Development. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
