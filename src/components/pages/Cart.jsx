import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom"; 

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  // Handle Checkout Navigation
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px", marginBottom: "530px" }}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
                <img src={item.image} alt={item.title} style={{ width: "50px", height: "50px", marginRight: "10px" }} />
                {item.title} - ${item.price.toFixed(2)}
                <button 
                  onClick={() => dispatch(removeFromCart(item.id))} 
                  style={{ backgroundColor: "#ff4d4d", color: "white", padding: "5px", borderRadius: "5px", border: "none", cursor: "pointer", transition: "0.3s", transform: "scale(1)" }}
                  onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
                  onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>

          {/* Proceed to Checkout Button */}
          <button 
            onClick={handleCheckout}
            style={{ backgroundColor: "#dc2626", color: "white", padding: "10px", borderRadius: "5px", border: "none", cursor: "pointer", width: "100%", marginTop: "10px" }}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
