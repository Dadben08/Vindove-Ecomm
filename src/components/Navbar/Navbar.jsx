import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiGlobe, FiMenu, FiX, FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo.webp";
import { setSearchQuery } from "../store/filterSlice";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const cartItems = useSelector((state) => state.cart.items);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
  };

  return (
    <nav
      className={`sticky top-0 z-50 px-6 py-4 border-b flex justify-between items-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="E-Shop Logo" className="h-10 cursor-pointer" />
      </Link>

      {/* Search Bar (Hidden on Small Screens) */}
      <form
        onSubmit={handleSearchSubmit}
        className="hidden md:flex items-center border border-gray-300 shadow-md rounded-3xl overflow-hidden w-64 h-11"
      >
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search..."
          className="px-2 py-1 outline-none bg-transparent w-full text-sm"
        />
        <button
          type="submit"
          className="px-3 py-1 mx-2 bg-red-600 text-white rounded-3xl w-9 h-9 flex items-center justify-center"
        >
          <FiSearch size={14} />
        </button>
      </form>

      {/* Icons & Menu */}
      <div className="flex items-center gap-2">
        <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-300">
          <FiShoppingCart size={22} />
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full px-2">
              {cartItems.length}
            </span>
          )}
        </Link>

        <Link to="/cart" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-300">
          <FiGlobe size={22} />
        </Link> 
        <div className="border-1 flex p-1.5 rounded-full">
        <div className="relative">
          <button onClick={toggleMenu} className="p-2 rounded-full h-8 w-8 flex border border-gray-400">
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 text-black bg-white border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-start">
              <Link
                to="/about"
                className="block w-full px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                onClick={() => setIsOpen(false)}
              >
                About Me
              </Link>
              <Link
                to="/contact"
                className="block w-full px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <button
                onClick={toggleDarkMode}
                className="w-full text-left p-2 border border-gray-400 rounded-full shadow-md h-10 hover:shadow-lg mt-2"
              >
                {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
              </button>
            </div>
          )}
        </div>

        <Link
          to="/login"
          className="bg-gray-300 rounded-full p-2 flex items-center justify-center w-8 h-8 shadow-md border border-gray-400 hover:shadow-lg"
        >
          <FiUser size={18} />
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;