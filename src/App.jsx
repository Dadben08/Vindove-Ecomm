import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/store/store";
import Home from "./components/pages/Home.jsx";
import Cart from "./components/pages/Cart.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ProductDetail from "./components/pages/ProductDetail.jsx";
import AboutMe from "./components/AboutMe/aboutMe.jsx";
import ContactUs from "./components/ContactUs/contactUs.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx"; // Import HeroSection
import Checkout from "./components/pages/Checkout.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#121212" : "#ffffff";
    document.body.style.color = darkMode ? "#ffffff" : "#000000";
  }, [darkMode]);

  return (
    <Provider store={store}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        

        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
