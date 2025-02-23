import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "react-typewriter-effect";

const HeroSection = ({ darkMode }) => {
  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <h1 style={{ fontSize: "48px", fontWeight: "bold", margin: "10px 0" }}>
        <Typewriter
          text={[
            "Welcome to",
            "Kaabo si",
            "Nnọọ na",
            "Barka da zuwa",
          ]}
          cursor
          cursorStyle="_"
          loop={true}
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={1000}
        />
        <span style={{ color: "yellow" }}> E</span>-Shop!
      </h1>

      <p style={{ fontSize: "20px", maxWidth: "700px", lineHeight: "1.6", margin: "10px auto" }}>
        Discover the best deals on fashion, electronics, home essentials, and more. Shop now and enjoy amazing discounts!
      </p>

      <div style={{ marginTop: "25px", display: "flex", justifyContent: "center", gap: "20px" }}>
        <Link to="/cart" style={{ padding: "10px 20px", backgroundColor: "blue", color: "white", borderRadius: "8px" }}>
          Shop Now
        </Link>
        <Link to="/about" style={{ padding: "10px 20px", backgroundColor: "black", color: "white", borderRadius: "8px" }}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
