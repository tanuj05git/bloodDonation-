import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: "url(' https://www.cancer.gov/sites/g/files/xnrzdm211/files/styles/cgov_article/public/cgov_image/media_image/2023-10/stem%20cell%20donation%20graphic.jpg?h=6fdef4be&itok=bttsR5WE')" }}>
      <div className="absolute inset-0 bg-cover bg-center  before:absolute before:inset-0 before:bg-black before:opacity-50 "></div>
      <div className="relative z-10 max-w-3xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold"
        >
          Every Drop Counts, Every Life Matters
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 , x: -50 }}
          animate={{ opacity: 1 , x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-lg"
        >
          Join our mission to save lives through blood donation. Your contribution today can give someone a tomorrow.
        </motion.p>
        <div className="mt-6 flex justify-center gap-4">
          <motion.a
            href="#donate"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold shadow-lg hover:bg-red-700 transition"
          >
            Donate Now
          </motion.a>
          <motion.a
            href="#learn-more"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-white text-red-600 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Learn More
          </motion.a>
        </div>
        <div className="mt-10 flex justify-center gap-10 text-lg font-semibold">
          <div>
            <span className="text-2xl">50K+</span>
            <p className="text-sm">Active Donors</p>
          </div>
          <div>
            <span className="text-2xl">100K+</span>
            <p className="text-sm">Lives Saved</p>
          </div>
          <div>
            <span className="text-2xl">200+</span>
            <p className="text-sm">Partner Hospitals</p>
          </div>
          <div>
            <span className="text-2xl">24/7</span>
            <p className="text-sm">Emergency Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
