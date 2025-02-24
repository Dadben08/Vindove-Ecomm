import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./components/store/store";
import Home from "./components/pages/Home.jsx";
import Cart from "./components/pages/Cart.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ProductDetail from "./components/pages/ProductDetail.jsx";
import AboutMe from "./components/AboutMe/aboutMe.jsx";
import ContactUs from "./components/ContactUs/contactUs.jsx";
import Checkout from "./components/pages/Checkout.jsx";

function AppContent() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#121212" : "#ffffff";
    document.body.style.color = darkMode ? "#ffffff" : "#000000";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Get cart items count from Redux store
  const cartItems = useSelector((state) => state.cart.items.length);

  return (
    <Router>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cartItems={cartItems}
      />

      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </Router>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
