import { useState } from "react";
import { motion } from "framer-motion";

const DonateBlood = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bloodGroup: "",
    contact: "",
    location: "",
    availability: "yes",
    success: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, success: true });
    setTimeout(() => setFormData({ ...formData, success: false }), 3000);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Donate Blood</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" required className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" required className="w-full p-2 border rounded" onChange={handleChange} />
        <select name="bloodGroup" required className="w-full p-2 border rounded" onChange={handleChange}>
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <input type="text" name="contact" placeholder="Contact Info" required className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" required className="w-full p-2 border rounded" onChange={handleChange} />
        <div className="flex gap-4">
          <label><input type="radio" name="availability" value="yes" checked={formData.availability === "yes"} onChange={handleChange} /> Yes</label>
          <label><input type="radio" name="availability" value="no" checked={formData.availability === "no"} onChange={handleChange} /> No</label>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-red-500 text-white p-2 rounded font-bold"
        >
          Submit
        </motion.button>
      </form>
      {formData.success && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-600 text-center mt-3"
        >
          ✅ Form submitted successfully!
        </motion.p>
      )}
    </div>
  );
};

export default DonateBlood;
