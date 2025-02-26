import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        textAlign: "center",
        maxWidth: "400px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Image */}
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "50%",
            height: "50%",
            maxHeight: "250px",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
      </Link>

      {/* Product Details */}
      <div style={{ padding: "10px", width: "100%" }}>
        <h3 style={{ fontSize: "1.2rem", marginBottom: "5px" }}>{product.title}</h3>
        <p
          style={{
            fontSize: "0.9rem",
            color: "#555",
            minHeight: "40px", // Ensure consistent height
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {product.description}
        </p>

        {/* Rating */}
        <p style={{ fontSize: "1rem", color: "#ff9800" }}>
          {"⭐️".repeat(Math.round(product.rating))}
        </p>

        <p style={{ fontSize: "1.1rem", fontWeight: "bold" }}>${product.price.toFixed(2)}</p>

        {/* Add to Cart Button */}
        <button
          onClick={() => dispatch(addToCart(product))}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 15px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            transition: "0.3s",
            width: "100%", // Ensures all buttons have the same width
            fontSize: "1rem",
            marginTop: "10px",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
