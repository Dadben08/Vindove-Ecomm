import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
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
    <div style={{ padding: "40px", maxWidth: "600px", margin: "auto", textAlign: "center"}}>
      <h2 style={{ color: "#007bff" }}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1.5px solid gray", color: "#007bff" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1.5px solid gray", color: "#007bff" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1.5px solid gray", height: "150px", color: "#007bff" }}
        />
        <button type="submit" style={{ backgroundColor: "#28a745", color: "white", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Send Message
        </button>
      </form>

      {/* Social Media Links */}
      <div style={{ marginTop: "140px", display: "flex", justifyContent: "center", gap: "20px" }}>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" style={{ color: "#007bff", fontSize: "30px" }}>
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" style={{ color: "#E1306C", fontSize: "30px" }}>
          <FaInstagram />
        </a>
        <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", fontSize: "30px" }}>
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
