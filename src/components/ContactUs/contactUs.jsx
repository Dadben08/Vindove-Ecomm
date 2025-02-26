import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const ContactUs = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={`p-10 max-w-lg mx-auto text-center pt-26 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <h2 className="text-2xl font-bold text-red-500">Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-2 rounded border border-gray-400 h-36 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
        />
        <button type="submit" className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition">
          Send Message
        </button>
      </form>

      {/* Social Media Links */}
      <div className="mt-14 flex justify-center gap-6 text-3xl">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 transition">
          <FaInstagram />
        </a>
        <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 transition">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
