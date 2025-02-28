import React from "react";
import { FaGlobe } from "react-icons/fa"; // Importing the globe icon

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`py-4 border-t text-sm ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-6 gap-4">
        {/* Left Section */}
        <div className="flex flex-wrap justify-center sm:justify-start space-x-2 text-center sm:text-left">
          <p>&copy; 2025</p>
          <a href="#" className="hover:underline">Privacy</a>
          <span>·</span>
          <a href="#" className="hover:underline">Terms</a>
          <span>·</span>
          <a href="#" className="hover:underline">Sitemap</a>
          <span>·</span>
          <a href="#" className="hover:underline">Destinations</a>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3">
          <FaGlobe size={16} />
          <a href="#" className="hover:underline">Giglobe</a>
          <a href="#" className="hover:underline">English (US)</a>
          <span>$</span>
          <a href="#" className="hover:underline">USD</a>
          <a href="#" className="hover:underline">Support & Resources</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
