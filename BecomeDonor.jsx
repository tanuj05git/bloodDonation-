import React, { useState } from "react";
import { motion } from "framer-motion";

const BecomeDonor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bloodType: "",
    phone: "",
    location: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your donation appointment is scheduled.`);
  };

  return (
    <section className="become-donor-section bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-red-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Become a Donor
        </motion.h2>

        {/* Signup Form */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Sign Up to Donate Blood</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              className="p-2 border rounded"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              className="p-2 border rounded"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <select
              name="bloodType"
              className="p-2 border rounded"
              value={formData.bloodType}
              onChange={handleChange}
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
              type="tel"
              name="phone"
              className="p-2 border rounded"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="location"
              className="p-2 border rounded"
              placeholder="Location / City"
              value={formData.location}
              onChange={handleChange}
              required
            />

            {/* Schedule Appointment */}
            <h3 className="text-lg font-semibold">Schedule a Donation</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <input
                type="date"
                name="appointmentDate"
                className="p-2 border rounded"
                value={formData.appointmentDate}
                onChange={handleChange}
                required
              />

              <input
                type="time"
                name="appointmentTime"
                className="p-2 border rounded"
                value={formData.appointmentTime}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Register as a Donor
            </button>
          </form>
        </motion.div>

        {/* Health Benefits of Donating Blood */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Health Benefits of Donating Blood</h3>
          <ul className="text-left text-lg list-disc list-inside">
            <li>Reduces harmful iron stores in the body.</li>
            <li>Improves heart and liver health.</li>
            <li>Stimulates blood cell production.</li>
            <li>Helps in weight loss and maintaining a healthy body.</li>
            <li>Potentially reduces cancer risk.</li>
            <li>Free mini-health checkup every time you donate!</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default BecomeDonor;
