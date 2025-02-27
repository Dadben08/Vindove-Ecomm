import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = ({ darkMode }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle Checkout Navigation
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div
      className={`min-h-screen flex justify-center items-center transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className={`p-6 rounded-lg shadow-md w-full max-w-3xl mx-auto transition-all duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}>
        <h2 className="text-2xl font-semibold text-center mb-4">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-400">Your cart is empty</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-600">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center py-4">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.title} className="w-12 h-12 rounded-md mr-4" />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-500"}`}>
                        ${item.price.toFixed(2)}
                      </p>
                      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400 transition"
                    >
                      -
                    </button>
                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="bg-green-500 text-white px-3 py-1 rounded-md ml-2 hover:bg-green-400 transition"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold mt-6">Total: ${totalPrice.toFixed(2)}</h3>

            {/* Proceed to Checkout Button */}
            <button
              onClick={handleCheckout}
              className="w-full bg-red-600 text-white py-2 rounded-lg mt-4 hover:bg-red-500 transition"
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
