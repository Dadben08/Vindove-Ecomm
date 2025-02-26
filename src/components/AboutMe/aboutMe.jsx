import React from "react";

const AboutMe = () => {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "800px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#007bff" }}>About E-Shop</h2>
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        Welcome to <strong>E-Shop</strong>, your go-to online marketplace for
        quality products at unbeatable prices. Our platform offers a seamless
        shopping experience, featuring a wide range of products across multiple
        categories.
      </p>

      <h3 style={{ marginTop: "20px", color: "Orangered" }}>What We Sell:</h3>
      <ul
        style={{
          listStyleType: "none",
          padding: "0",
          fontSize: "18px",
          lineHeight: "1.8",
        }}
      >
        <li>
          📱 <strong>Electronics</strong>: Smartphones, Laptops, Tablets,
          Smartwatches, Headphones, and more.
        </li>
        <li>
          👗 <strong>Fashion & Apparel</strong>: Men's & Women's Clothing,
          Shoes, Accessories, and Designer Wear.
        </li>
        <li>
          🏠 <strong>Home & Kitchen</strong>: Appliances, Furniture, Cookware,
          and Home Décor.
        </li>
        <li>
          🛍️ <strong>Beauty & Personal Care</strong>: Skincare, Makeup,
          Perfumes, and Haircare Products.
        </li>
        <li>
          🎮 <strong>Gaming & Entertainment</strong>: Video Games, Consoles, VR
          Headsets, and Streaming Devices.
        </li>
        <li>
          🛠️ <strong>Automobile & Accessories</strong>: Car Parts, Tools, and
          Maintenance Equipment.
        </li>
        <li>
          📚 <strong>Books & Stationery</strong>: Bestsellers, Educational
          Materials, and Office Supplies.
        </li>
        <li>
          👶 <strong>Baby & Kids</strong>: Toys, Clothing, Educational Games,
          and Baby Essentials.
        </li>
        <li>
          🍽️ <strong>Groceries</strong>: Food, Beverages, Snacks, and Organic
          Products.
        </li>
      </ul>

      <p style={{ fontSize: "18px", lineHeight: "1.6", marginTop: "20px" }}>
        At <strong>E-Shop</strong>, we ensure quality, affordability, and fast
        delivery. Enjoy secure payment options and excellent customer service
        while shopping with us. Your satisfaction is our priority!
      </p>
    </div>
  );
};

export default AboutMe;
