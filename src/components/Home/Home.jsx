import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/ProductSlice.jsx";
import ProductCard from "../ProductCard/ProductCard.jsx";
import image from "../../data/image.js";
import { IoFilterOutline } from "react-icons/io5";

const categories = [
  { src: image.home, label: "All" },
  { src: image.men, label: "men's clothing" },
  { src: image.ladies, label: "women's clothing" },
  { src: image.electronics, label: "electronics" },
  { src: image.jewelries, label: "jewelery" },
  { src: image.bch, label: "Beach" },
  { src: image.bedab, label: "Bedroom" },
  { src: image.cabins, label: "Cabins" },
  { src: image.golfing, label: "Golfing" },
  { src: image.design, label: "Design" },
  { src: image.campers, label: "Campers" },
  { src: image.arctic, label: "Arctic" },
  { src: image.caves, label: "Caves" },
  { src: image.countSide, label: "Countryside" },
  { src: image.castles, label: "Castles" },
  { src: image.omg, label: "OMG" },
  { src: image.tropical, label: "Tropical" },
  { src: image.mansions, label: "Mansions" },
  { src: image.luxe, label: "Luxury" },
  { src: image.shomes, label: "Smart Homes" },
  { src: image.parks, label: "Parks" },
];

const Home = ({ darkMode }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const searchQuery = useSelector((state) => state.filter.searchQuery);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, products]);

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-4 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      {/* Sticky Category Icons */}
      <div className={`top-17 sticky w-full flex gap-14 px-4 py-2 text-3xl overflow-x-scroll scrollbar-hide ${darkMode ? "bg-gray-700" : "bg-white"}`}>
        <div className="flex gap-6 px-4 py-2 text-3xl overflow-x-scroll scrollbar-hide w-full">
          {categories.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center min-w-[80px] cursor-pointer ${
                selectedCategory === item.label ? "text-red-600 font-bold" : ""
              }`}
              onClick={() => setSelectedCategory(item.label)}
            >
              <img src={item.src} className="w-6 h-6" alt={item.label} />
              <span className="text-sm text-center mt-1">{item.label}</span>
            </div>
          ))}
        </div>
        <div className={`flex items-center h-12 gap-3 rounded-xl p-3 border-2 ml-4 font-sm ${darkMode ? "border-gray-500 text-white" : "border-gray-300 text-black"}`}>
          <IoFilterOutline className="text-sm" />
          <p className="text-sm">Filter</p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-2xl items-center text-gray-600">
            No products found.
          </p>
        )}
      </div>

      {/* Hide Scrollbar Styles */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
