import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Facebook, Twitter, Instagram, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation(); 

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-white shadow-md w-full px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            {/* Logo with Hover Animation */}
            <motion.div 
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
            >
                <Link to="/" className="flex items-center space-x-2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXTmstPMntAE64jPclnVidea8V9fPyFfpBkg&s" alt="Blood Donation Logo" className="w-10 h-10" />
                    <span className="text-xl font-bold text-gray-900">Blood Donation</span>
                </Link>
            </motion.div>

            {/* Desktop Navigation Links with Hover Effects */}
            <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
                {["Home", "About", "Donate", "Gallery", "Contact"].map((item) => (
                    <li key={item} className="relative group">
                        <Link 
                            to={`/${item.toLowerCase()}`} 
                            className={`hover:text-red-500 transition ${
                                location.pathname === `/${item.toLowerCase()}` ? "text-red-600 font-bold" : ""
                            }`}
                        >
                            {item}
                        </Link>
                        {/* Underline Effect on Hover */}
                        <motion.div 
                            className="absolute left-0 bottom-0 h-0.5 bg-red-500 w-0 group-hover:w-full transition-all duration-300"
                        />
                    </li>
                ))}
            </ul>

            {/* Right Section - Search, Social Icons, Buttons */}
            <div className="hidden md:flex items-center space-x-4">
                {/* Search Bar */}
                <div className="relative hidden lg:block">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="bg-gray-100 px-4 py-2 rounded-full pl-10 text-gray-700 focus:outline-none"
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-3 text-gray-600">
                    {[Facebook, Twitter, Instagram].map((Icon, index) => (
                        <motion.div 
                            key={index}
                            whileHover={{ scale: 1.2, color: "#E53E3E" }}
                            transition={{ duration: 0.2 }}
                        >
                            <Icon className="w-5 h-5 cursor-pointer transition" />
                        </motion.div>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex space-x-3">
                    <Link 
                        to="/donate" 
                        className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold transition transform hover:bg-red-700 hover:scale-105"
                    >
                        Donate Now
                    </Link>
                    <Link 
                        to="/login" 
                        className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold transition transform hover:bg-red-700 hover:scale-105"
                    >
                        Login
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={toggleMenu}>
                {menuOpen ? <X className="w-7 h-7 text-gray-700" /> : <Menu className="w-7 h-7 text-gray-700" />}
            </button>

            {/* Mobile Navigation Menu */}
            <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: menuOpen ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
                className="fixed top-0 right-0 h-full w-4/5 sm:w-1/2 bg-white shadow-lg p-5 flex flex-col items-center space-y-6 transition-transform duration-300 md:hidden"
            >
                <button className="self-end" onClick={toggleMenu}>
                    <X className="w-7 h-7 text-gray-700" />
                </button>

                {["Home", "About", "Donate", "Gallery", "Contact"].map((item) => (
                    <Link 
                        key={item} 
                        to={`/${item.toLowerCase()}`} 
                        className={`text-gray-700 text-lg hover:text-red-500 transition ${
                            location.pathname === `/${item.toLowerCase()}` ? "text-red-600 font-bold" : ""
                        }`}
                        onClick={() => setMenuOpen(false)}
                    >
                        {item}
                    </Link>
                ))}

                {/* Mobile Buttons */}
                <div className="flex flex-col space-y-3 w-full px-4">
                    <Link 
                        to="/donate" 
                        className="bg-red-600 text-white w-full text-center py-2 rounded-full font-semibold transition transform hover:bg-red-700 hover:scale-105"
                        onClick={() => setMenuOpen(false)}
                    >
                        Donate Now
                    </Link>
                    <Link 
                        to="/login" 
                        className="bg-red-600 text-white w-full text-center py-2 rounded-full font-semibold transition transform hover:bg-red-700 hover:scale-105"
                        onClick={() => setMenuOpen(false)}
                    >
                        Login
                    </Link>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
