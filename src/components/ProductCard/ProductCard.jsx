import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px", textAlign: "center" }}>
      
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px", marginBottom: "10px" }} />
        <h3>{product.title}</h3>
      </Link>
      <p>${product.price.toFixed(2)}</p>
      <button 
        onClick={() => dispatch(addToCart(product))} 
        style={{ backgroundColor: "#007bff", color: "white", padding: "8px", borderRadius: "5px", border: "none", cursor: "pointer", transition: "0.3s", transform: "scale(1)" }}
        onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
        onMouseOut={(e) => e.target.style.transform = "scale(1)"}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
