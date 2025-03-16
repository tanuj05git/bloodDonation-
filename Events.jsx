import React, { useState } from "react";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "City Blood Drive",
    date: "March 10, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Community Hall, New Delhi",
  },
  {
    id: 2,
    title: "University Blood Camp",
    date: "March 15, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "ABC University, Mumbai",
  },
  {
    id: 3,
    title: "Corporate Blood Donation Camp",
    date: "March 20, 2025",
    time: "11:00 AM - 5:00 PM",
    location: "Tech Park, Bangalore",
  },
];

const Events = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! You have registered for ${formData.event}.`);
  };

  return (
    <section className="events-section bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-red-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blood Donation Camps & Events
        </motion.h2>
        <p className="text-lg text-gray-700 mb-10">
          Join us in upcoming blood donation drives and save lives.
        </p>

        {/* Event List */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-red-500">{event.title}</h3>
              <p className="text-gray-700 mt-2">{event.date}</p>
              <p className="text-gray-700">{event.time}</p>
              <p className="text-gray-600">{event.location}</p>
            </motion.div>
          ))}
        </div>

        {/* Registration Form */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Register for an Event</h3>
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

            <input
              type="tel"
              name="phone"
              className="p-2 border rounded"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <select
              name="event"
              className="p-2 border rounded"
              value={formData.event}
              onChange={handleChange}
              required
            >
              <option value="">Select an Event</option>
              {events.map((event) => (
                <option key={event.id} value={event.title}>
                  {event.title} - {event.date}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Register Now
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
