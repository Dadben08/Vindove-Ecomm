import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/ProductSlice";
import ProductCard from "../ProductCard/ProductCard";
import { FaTshirt, FaLaptop,  FaFilter, FaRing } from "react-icons/fa";
import { GiDress } from "react-icons/gi";


const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#121212" : "#ffffff";
    document.body.style.color = darkMode ? "#ffffff" : "#000000";

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <div style={{ padding: "16px" }}>
      {/* <HeroSection darkMode={darkMode} setDarkMode={setDarkMode} />  */}


      {/* Filter Icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <FaFilter
          size={30}
          color={selectedCategory === "All" ? "#007bff" : "#555"}
          onClick={() => setSelectedCategory("All")}
          style={{ cursor: "pointer" }}
        />
        <FaLaptop
          size={30}
          color={selectedCategory === "electronics" ? "#007bff" : "#555"}
          onClick={() => setSelectedCategory("electronics")}
          style={{ cursor: "pointer" }}
        />
        <FaTshirt
          size={30}
          color={selectedCategory === "men's clothing" ? "#007bff" : "#555"}
          onClick={() => setSelectedCategory("men's clothing")}
          style={{ cursor: "pointer" }}
        />
        < GiDress
          size={30}
          color={selectedCategory === "women's clothing" ? "#007bff" : "#555"}
          onClick={() => setSelectedCategory("women's clothing")}
          style={{ cursor: "pointer" }}
        />
        <FaRing 
         size={30}
         color={selectedCategory === "jewelery" ? "#007bff" : "#555"}
         onClick={() => setSelectedCategory("jewelery")}
         style={{ cursor: "pointer" }}
        />
      </div>

      {/* Product Grid */}
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
