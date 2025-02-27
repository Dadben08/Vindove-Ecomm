import React from "react";

const AboutMe = ({ darkMode }) => {
  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className={`p-10 max-w-3xl w-full text-center rounded-lg shadow-lg ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <h2 className="text-2xl font-bold text-blue-500">About E-Shop</h2>
        <p className="text-lg leading-relaxed mt-4">
          Welcome to <strong>E-Shop</strong>, your go-to online marketplace for quality products at unbeatable prices.
          Our platform offers a seamless shopping experience, featuring a wide range of products across multiple categories.
        </p>

        <h3 className="text-xl font-semibold text-orange-500 mt-6">What We Sell:</h3>
        <ul className="list-none text-lg leading-loose mt-4">
          <li>📱 <strong>Electronics</strong>: Smartphones, Laptops, Tablets, Smartwatches, and more.</li>
          <li>👗 <strong>Fashion & Apparel</strong>: Clothing, Shoes, Accessories, and Designer Wear.</li>
          <li>🏠 <strong>Home & Kitchen</strong>: Appliances, Furniture, Cookware, and Home Décor.</li>
          <li>🛍️ <strong>Beauty & Personal Care</strong>: Skincare, Makeup, Perfumes, and Haircare Products.</li>
          <li>🎮 <strong>Gaming & Entertainment</strong>: Video Games, Consoles, VR Headsets, and Streaming Devices.</li>
          <li>🛠️ <strong>Automobile & Accessories</strong>: Car Parts, Tools, and Maintenance Equipment.</li>
          <li>📚 <strong>Books & Stationery</strong>: Bestsellers, Educational Materials, and Office Supplies.</li>
          <li>👶 <strong>Baby & Kids</strong>: Toys, Clothing, Educational Games, and Baby Essentials.</li>
          <li>🍽️ <strong>Groceries</strong>: Food, Beverages, Snacks, and Organic Products.</li>
        </ul>

        <p className="text-lg leading-relaxed mt-6">
          At <strong>E-Shop</strong>, we ensure quality, affordability, and fast delivery. Enjoy secure payment options
          and excellent customer service while shopping with us. Your satisfaction is our priority!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
