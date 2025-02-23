import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";

const HeroSection = ({ darkMode }) => {
  // Background Styling
  const heroStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "80px 20px",
    background: darkMode
      ? "linear-gradient(135deg, #111, #222)"
      : "linear-gradient(135deg, #007bff, #ff4500)", 
    color: darkMode ? "#f0f0f0" : "#fff",
    borderRadius: "12px",
    marginBottom: "30px",
    boxShadow: darkMode
      ? "0 10px 20px rgba(255, 255, 255, 0.1)"
      : "0 10px 20px rgba(0, 0, 0, 0.2)",
    transition: "0.3s ease-in-out",
  };

  // Button Styling
  const buttonStyle = (bgColor, textColor) => ({
    backgroundColor: bgColor,
    color: textColor,
    padding: "14px 24px",
    borderRadius: "8px",
    fontSize: "18px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "transform 0.2s ease-in-out, background-color 0.3s",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  });

  return (
    <div style={heroStyle}>
      
      <h1 style={{ fontSize: "48px", fontWeight: "bold", margin: "10px 0" }}>
        <Typical
          steps={[
            "Welcome to", 4000,
            "Kaabo si", 5000,
            "Nnọọ na", 6000,
            "Barka da zuwa", 7000
          ]}
          loop={Infinity}
          wrapper="span"
        />
        <span style={{ color: "yellow" }}> E</span>-Shop!
      </h1>

      
      <p style={{ fontSize: "20px", maxWidth: "700px", lineHeight: "1.6", marginTop: "10px", opacity: "0.9" }}>
        Discover the best deals on fashion, electronics, home essentials, and more. Shop now and enjoy amazing discounts!
      </p>

      
      <div style={{ marginTop: "25px", display: "flex", gap: "20px" }}>
        <Link
          to="/cart"
          style={buttonStyle(darkMode ? "#555" : "white", darkMode ? "#fff" : "#007bff")}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = darkMode ? "#777" : "#e6e6e6";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = darkMode ? "#555" : "white";
            e.target.style.transform = "scale(1)";
          }}
        >
          Shop Now
        </Link>

        <Link
          to="/about"
          style={buttonStyle(darkMode ? "#222" : "black", "white")}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = darkMode ? "#444" : "#222";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = darkMode ? "#222" : "black";
            e.target.style.transform = "scale(1)";
          }}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
