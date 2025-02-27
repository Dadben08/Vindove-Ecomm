import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./components/store/store";
import Home from "./components/Home/Home.jsx";
import Cart from "./components/pages/Cart.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ProductDetail from "./components/pages/ProductDetail.jsx";
import AboutMe from "./components/AboutMe/aboutMe.jsx";
import ContactUs from "./components/ContactUs/contactUs.jsx";
import Checkout from "./components/pages/Checkout.jsx";
import Login from "./components/Login/Login.jsx";

function AppContent() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
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
        setSelectedCategory={setSelectedCategory}
      />

      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              selectedCategory={selectedCategory} 
              darkMode={darkMode} 
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm} 
            />
          } 
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<AboutMe  darkMode={darkMode} />} />
        <Route path="/contact" element={<ContactUs  darkMode={darkMode} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={ <Login />} />
      </Routes>

      <Footer  darkMode={darkMode} />
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
