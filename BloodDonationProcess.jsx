import React from "react";
import { motion } from "framer-motion";

const BloodDonationProcess = () => {
  return (
    <section className="blood-donation-section bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2 
          className="text-4xl font-bold text-red-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blood Donation Process
        </motion.h2>

        {/* Step-by-Step Guide */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">📝 Registration</h3>
            <p>Fill out a simple donor form and get your health checked.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">🩸 Donation</h3>
            <p>Relax as a small amount of blood is drawn (takes 10-15 mins).</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">💪 Recovery</h3>
            <p>Enjoy light snacks and fluids to regain energy.</p>
          </div>
        </motion.div>

        {/* Eligibility Criteria */}
        <motion.div 
          className="mt-10 bg-red-100 p-6 rounded-lg shadow-lg text-gray-800"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-red-600 mb-3">Eligibility Criteria</h3>
          <ul className="text-lg list-disc list-inside">
            <li>✔️ Age between 18-65 years</li>
            <li>✔️ Minimum weight of 50kg</li>
            <li>✔️ No recent surgeries or infections</li>
            <li>✔️ Hemoglobin level of at least 12.5g/dL</li>
            <li>✔️ No alcohol intake in the past 24 hours</li>
          </ul>
        </motion.div>

        {/* FAQs Section */}
        <motion.div 
          className="mt-10 bg-white p-6 rounded-lg shadow-lg text-gray-800 text-left"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-red-600 mb-3">FAQs on Blood Donation</h3>
          <div className="space-y-4">
            <details className="bg-gray-100 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">❓ How often can I donate blood?</summary>
              <p className="mt-2">You can donate whole blood every 3 months and platelets every 2 weeks.</p>
            </details>
            <details className="bg-gray-100 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">❓ Does blood donation hurt?</summary>
              <p className="mt-2">You may feel a small pinch, but the process is generally painless.</p>
            </details>
            <details className="bg-gray-100 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">❓ Can I donate if I have a tattoo?</summary>
              <p className="mt-2">Yes, if your tattoo is older than 6 months and done in a certified studio.</p>
            </details>
            <details className="bg-gray-100 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">❓ What should I eat before donating?</summary>
              <p className="mt-2">Eat iron-rich foods and drink plenty of water before donating.</p>
            </details>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BloodDonationProcess;
