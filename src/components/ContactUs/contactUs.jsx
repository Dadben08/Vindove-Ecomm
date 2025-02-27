import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const ContactUs = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!formData.name || !formData.email.includes("@") || !formData.message) {
      setError("Please fill in all fields correctly.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className={`p-10 max-w-lg w-full text-center pt-6 rounded-lg  ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <h2 className="text-2xl font-bold text-red-500">Contact Us</h2>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">Message sent successfully!</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
          <label className="text-sm font-semibold">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`p-2 rounded border ${darkMode ? "border-gray-500 bg-gray-800 text-white focus:ring-blue-400" : "border-gray-600 bg-transparent focus:ring-blue-500"} focus:outline-none focus:ring-2`}
          />
          <label className="text-sm font-semibold">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`p-2 rounded border ${darkMode ? "border-gray-500 bg-gray-800 text-white focus:ring-blue-400" : "border-gray-600 bg-transparent focus:ring-blue-500"} focus:outline-none focus:ring-2`}
          />
          <label className="text-sm font-semibold">Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className={`p-2 rounded border h-36 ${darkMode ? "border-gray-500 bg-gray-800 text-white focus:ring-blue-400" : "border-gray-600 bg-transparent focus:ring-blue-500"} focus:outline-none focus:ring-2`}
          />
          <button
            type="submit"
            disabled={loading}
            className={`p-2 rounded transition ${loading ? "bg-gray-500" : "bg-red-600 hover:bg-red-700 text-white"}`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center gap-6 text-3xl">
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
    </div>
  );
};

export default ContactUs;