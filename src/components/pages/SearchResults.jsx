import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = ({ products }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q"); // Extract search query

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Results for "{query}"</h2>
      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default SearchResults;
