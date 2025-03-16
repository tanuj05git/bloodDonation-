import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-white py-10"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold text-red-500">About Us</h3>
          <p className="mt-2 text-gray-400">
            We are committed to saving lives by connecting blood donors with those in need. Join us in making a difference!
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-red-500">Contact Us</h3>
          <p className="mt-2 flex items-center">
            <FaPhone className="text-red-500 mr-2" /> +91 98765 43210
          </p>
          <p className="mt-2 flex items-center">
            <FaEnvelope className="text-red-500 mr-2" /> support@blooddonation.com
          </p>
          <p className="mt-2 flex items-center">
            <FaMapMarkerAlt className="text-red-500 mr-2" /> New Delhi, India
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-red-500">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            {["Home", "About", "Find Donors", "Contact"].map((link) => (
              <li key={link}>
                <a href={`/${link.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-red-400 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold text-red-500">Follow Us</h3>
          <div className="mt-2 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Blood Donation. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
