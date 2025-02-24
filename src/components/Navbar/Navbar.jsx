import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-switch";
import logo from "../../assets/logo.png";


const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, [setDarkMode]);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  // Toggle Menu Visibility
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={`relative sticky top-0 z-50 px-6 py-4 shadow-md flex justify-between items-center ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="E-Shop Logo" className="h-10 cursor-pointer" />
        <h2 className="text-xl font-semibold">E-Shop</h2>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="hover:text-gray-500">Home</Link>
        <Link to="/about" className="hover:text-gray-500">About</Link>
        <Link to="/contact" className="hover:text-gray-500">Contact</Link>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <FiShoppingCart size={25} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>

        {/* Dark Mode Switch */}
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

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`absolute top-full left-0 w-full transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-96 opacity-0"} ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} shadow-md py-4 px-6 flex flex-col gap-4`}>
        <Link to="/" className="hover:text-gray-500" onClick={toggleMenu}>Home</Link>
        <Link to="/about" className="hover:text-gray-500" onClick={toggleMenu}>About</Link>
        <Link to="/contact" className="hover:text-gray-500" onClick={toggleMenu}>Contact</Link>

        {/* Cart Icon */}
        <Link to="/cart" className="relative flex items-center" onClick={toggleMenu}>
          <FiShoppingCart size={25} />
          {cartItems.length > 0 && (
            <span className="ml-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>

        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-2">
          <span>Dark Mode</span>
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
      </div>
    </nav>
  );
};

export default Navbar;
