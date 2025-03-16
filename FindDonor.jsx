import React, { useState } from "react";
import { motion } from "framer-motion";

const FindDonor = () => {
  const [bloodType, setBloodType] = useState("");
  const [location, setLocation] = useState("");
  const [availability, setAvailability] = useState("all");
  const [urgency, setUrgency] = useState("normal");

  const handleSearch = () => {
    alert(`Searching for ${bloodType} donors near ${location}`);
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    alert(`Blood request submitted! Urgency: ${urgency}`);
  };

  return (
    <section className="find-donor-section bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2 
          className="text-4xl font-bold text-red-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Find a Donor / Request Blood
        </motion.h2>

        {/* Search Donors Section */}
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Search for Donors Nearby</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <select
              className="p-2 border rounded"
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
            >
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>

            <input
              type="text"
              className="p-2 border rounded"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <select
              className="p-2 border rounded"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
            >
              <option value="all">All Donors</option>
              <option value="available">Available Now</option>
              <option value="busy">Busy</option>
            </select>

            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </motion.div>

        {/* Request Blood Section */}
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Request Blood</h3>
          <form onSubmit={handleRequestSubmit} className="flex flex-col gap-4">
            <select
              className="p-2 border rounded"
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
              required
            >
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>

            <input
              type="text"
              className="p-2 border rounded"
              placeholder="Enter Hospital or Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />

            <select
              className="p-2 border rounded"
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
            >
              <option value="normal">Normal</option>
              <option value="urgent">Urgent</option>
              <option value="critical">Critical</option>
            </select>

            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Submit Request
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default FindDonor;
