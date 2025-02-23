import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice"; // Add action to clear cart
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address) {
      alert("Please fill in all fields!");
      return;
    }

    // Simulate order processing
    setTimeout(() => {
      alert("Order placed successfully!");
      dispatch(clearCart()); // Clear cart after order
      navigate("/"); // Redirect to home page
    }, 1000);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto", border: "1px solid #ccc", borderRadius: "5px", marginTop: "100px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", marginBottom: "170px" }}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required style={inputStyle} />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required style={inputStyle} />
        <input type="text" name="address" placeholder="Shipping Address" value={form.address} onChange={handleChange} required style={inputStyle} />
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button type="submit" style={buttonStyle}>Place Order</button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  backgroundColor: "#28a745",
  color: "white",
  padding: "10px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  width: "100%",
  marginTop: "10px",
};

export default Checkout;
