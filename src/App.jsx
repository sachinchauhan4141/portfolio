import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="dark">
      <Navbar />
      <HeroSection />
      <Services />
      <Projects />
      <Resume />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
