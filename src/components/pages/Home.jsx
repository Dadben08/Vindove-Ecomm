import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import ProductCard from "../ProductCard/ProductCard";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const [searchTerm, setSearchTerm] = useState("");

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#121212" : "#ffffff";
    document.body.style.color = darkMode ? "#ffffff" : "#000000";

    
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "16px" }}>
      <HeroSection darkMode={darkMode} setDarkMode={setDarkMode} />

      
      <div
        style={{
          padding: "16px",
          textAlign: "center",
          backgroundColor: darkMode ? "#333" : "#f4f4f4",
          color: darkMode ? "#fff" : "#000",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h2>Latest Products</h2>
      </div>

      
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "16px",
          width: "100%",
          borderRadius: "5px",
          border: "1px solid #ccc",
          outline: "none",
        }}
      />

      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px",
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p style={{ textAlign: "center", color: darkMode ? "#bbb" : "#333" }}>
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
