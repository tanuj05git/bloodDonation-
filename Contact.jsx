import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We will get back to you soon.`);
  };

  return (
    <section className="contact-section bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-red-600 text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <p className="text-lg text-gray-700 text-center mb-10">
          Get in touch with us for support, inquiries, or to learn more about blood donation.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="flex items-center text-gray-700 mb-2">
              <FaPhone className="text-red-500 mr-2" /> +91 98765 43210
            </p>
            <p className="flex items-center text-gray-700 mb-2">
              <FaEnvelope className="text-red-500 mr-2" /> support@bloodconnect.com
            </p>
            <p className="flex items-center text-gray-700 mb-4">
              <FaMapMarkerAlt className="text-red-500 mr-2" /> BloodConnect HQ, New Delhi, India
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-red-500 text-2xl hover:text-red-700">
                <FaFacebook />
              </a>
              <a href="#" className="text-red-500 text-2xl hover:text-red-700">
                <FaTwitter />
              </a>
              <a href="#" className="text-red-500 text-2xl hover:text-red-700">
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                className="p-2 border rounded"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                className="p-2 border rounded"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                className="p-2 border rounded"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-4">Our Location</h3>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8396293945!2d77.06889967914679!3d28.52755429286939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d3b0c85b11b%3A0x4c1d68e981cfb4!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1677961391822!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
