import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice"; // Add action to clear cart
import { useNavigate } from "react-router-dom";

const Checkout = ({ darkMode }) => {
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
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-md p-6 rounded-lg shadow-md transition-all duration-300 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Checkout</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className={`w-full p-2 rounded-md border ${
              darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white text-black"
            }`}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className={`w-full p-2 rounded-md border ${
              darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white text-black"
            }`}
          />
          <input
            type="text"
            name="address"
            placeholder="Shipping Address"
            value={form.address}
            onChange={handleChange}
            required
            className={`w-full p-2 rounded-md border ${
              darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white text-black"
            }`}
          />

          <h3 className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</h3>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-500 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
