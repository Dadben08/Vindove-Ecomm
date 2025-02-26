import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`h-12 text-center items-center py-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <p>&copy; 2025 E-Commerce. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
