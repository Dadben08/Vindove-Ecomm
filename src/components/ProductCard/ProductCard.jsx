import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product, darkMode }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="w-[300px] h-[420px] flex flex-col items-center border border-gray-200 rounded-lg p-4 shadow-md bg-white"
    >
      {/* Image */}
      <Link to={`/product/${product.id}`} className="w-full flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-[150px] h-[150px] object-contain"
        />
      </Link>

      {/* Product Details */}
      <div className={`flex flex-col flex-grow justify-between items-center text-center mt-3 ${darkMode ? "border-gray-500 text-white" : "border-gray-300 text-black"}`}>
        <h3 className="text-lg font-semibold h-[50px] overflow-hidden">
          {product.title}
        </h3>

        {/* Rating */}
        <p className="text-yellow-500 text-lg">
          {"⭐️".repeat(Math.round(product.rating))}
        </p>

        {/* Price */}
        <p className="text-xl font-bold">${product.price.toFixed(2)}</p>

        {/* Add to Cart Button */}
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-md mt-3 transition-all w-32"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
