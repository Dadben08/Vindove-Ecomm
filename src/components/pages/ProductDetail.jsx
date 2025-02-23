import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === Number(id))
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "200px", height: "200px", marginBottom: "10px" }}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>${product.price.toFixed(2)}</h3>
    </div>
  );
};

export default ProductDetail;
