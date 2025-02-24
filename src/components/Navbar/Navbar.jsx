import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-switch";
import logo from "../../assets/logo.png";
 // Import setSearchQuery action from SearchSlice";

const Navbar = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };


 

  return (
    <nav className={`sticky top-0 z-[100] flex justify-between items-center px-6 py-4 shadow-md  ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      
      
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="E-Shop Logo" className="h-10 cursor-pointer" />
        <h2 className="text-xl font-semibold">E-Shop</h2>
      </Link>


      {/* Navigation Links & Cart */}
      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-gray-500">Home</Link>
        <Link to="/about" className="hover:text-gray-500">About</Link>
        <Link to="/contact" className="hover:text-gray-500">Contact</Link>

        {/* Cart Icon with Badge */}
        <Link to="/cart" className="relative">
          <FiShoppingCart size={25} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>

        {/* Dark Mode Toggle */}
        <Switch
          onChange={toggleDarkMode}
          checked={darkMode}
          onColor="#222"
          offColor="#ddd"
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={40}
          handleDiameter={18}
        />
      </div>
    </nav>
  );
};

export default Navbar;
