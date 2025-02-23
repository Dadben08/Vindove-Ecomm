import React from "react";
import { Link } from "react-router-dom";
import Switch from "react-switch"; // Import Toggle Switch

const Navbar = ({ darkMode, setDarkMode }) => {
  // Toggle Theme
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: darkMode ? "#333" : "#f8f9fa",
        color: darkMode ? "white" : "black",
      }}
    >
      <h2>
        <Link
          to="/"
          style={{
            color: darkMode ? "yellow" : "#007bff",
            textDecoration: "none",
          }}
        >
          E-Shop
        </Link>
      </h2>
      
      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <Link
          to="/"
          style={{ color: darkMode ? "white" : "black", textDecoration: "none" }}
        >
          Home
        </Link>
        <Link
          to="/cart"
          style={{ color: darkMode ? "white" : "black", textDecoration: "none" }}
        >
          Cart
        </Link>
        <Link
          to="/about"
          style={{ color: darkMode ? "white" : "black", textDecoration: "none" }}
        >
          About
        </Link>
        <Link
          to="/contact"
          style={{ color: darkMode ? "white" : "black", textDecoration: "none" }}
        >
          Contact
        </Link>

        {/* Toggle Switch */}
        <Switch
          onChange={toggleDarkMode}
          checked={darkMode}
          onColor="#222"
          offColor="#ddd"
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={40}
          handleDiameter={18}
        />
      </div>
    </nav>
  );
};

export default Navbar;
