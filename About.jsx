import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about-section bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2 
          className="text-4xl font-bold text-red-600 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Blood Donation Matters
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="text-gray-700 text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Every 2 seconds, someone needs a blood transfusion. Your donation can save lives and provide hope for those in need.  
        </motion.p>

        {/* Statistics Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="bg-red-500 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">4.5M+</h3>
            <p>People Need Blood Each Year</p>
          </div>
          <div className="bg-red-600 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1 Donation</h3>
            <p>Can Save up to 3 Lives</p>
          </div>
          <div className="bg-red-600 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Every 2 Seconds</h3>
            <p>Someone Needs Blood</p>
          </div>
        </motion.div>

        {/* How the App Works */}
        <motion.div 
          className="mt-10 bg-white p-6 rounded-lg shadow-lg text-gray-800"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-3">How Our App Works</h3>
          <ul className="text-lg list-disc list-inside">
            <li>  Register as a donor or request blood</li>
            <li> Search for nearby donors using Google Maps.</li>
            <li>Contact donors instantly for urgent needs.</li>
            <li> Get real-time availability updates.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
