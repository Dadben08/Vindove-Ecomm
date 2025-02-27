import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ darkMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with", { email, password });
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      } transition-all duration-300`}
    >
      <div
        className={`p-6 rounded-lg shadow-md w-96 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className={`block ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600 focus:ring-blue-400"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              required
            />
          </div>
          <div className="mb-4">
            <label className={`block ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600 focus:ring-blue-400"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-500 transition"
          >
            Login
          </button>
        </form>
        <p className={`text-center mt-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          Don't have an account?{" "}
          <Link to="/signup" className="text-red-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
