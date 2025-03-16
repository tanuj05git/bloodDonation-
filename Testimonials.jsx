import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    bloodType: "O+",
    story:
      "After a major accident, I urgently needed blood. A kind donor saved my life. I'm forever grateful!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Neha Verma",
    bloodType: "A-",
    story:
      "Donating blood has been an incredible experience. Knowing I helped someone is the best feeling!",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    bloodType: "B+",
    story:
      "My child needed blood for a surgery. A stranger stepped in and changed our lives forever.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-red-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Testimonials & Success Stories
        </motion.h2>
        <p className="text-lg text-gray-700 mb-10">
          Real stories of lives saved through blood donations.
        </p>

        {/* Testimonials Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-red-500 font-medium">Blood Type: {testimonial.bloodType}</p>
              <p className="text-gray-600 mt-2">{testimonial.story}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
