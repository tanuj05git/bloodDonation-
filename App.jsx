import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BloodDonationProcess from "./components/BloodDonationProcess";
import FindDonor from "./components/FindDonor";
import BecomeDonor from "./components/BecomeDonor";
import Testimonials from "./components/Testimonials";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/donors" element={<h2>Find Donors</h2>} />
        <Route path="/request" element={<h2>Request Blood</h2>} />
        <Route path="/about" element={<h2>About Us</h2>} />

        <Route path="/register" element={<h2>Register as Donor</h2>} />
      </Routes>
      <Hero />
      <About></About>
      <BloodDonationProcess></BloodDonationProcess>
      <FindDonor></FindDonor>
      <BecomeDonor></BecomeDonor>
      <Testimonials></Testimonials>
      <Events></Events>
      <Contact></Contact>
      <Footer></Footer>
    </Router>
  );
}

export default App;
