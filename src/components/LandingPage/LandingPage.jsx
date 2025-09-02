import React from "react";
import HeroSection from "../LandingPage/HeroSection.jsx";
import AboutSection from "../LandingPage/AboutSection.jsx";
import FeatureSection from "../LandingPage/FeatureSection.jsx";
import ContactSection from "../LandingPage/ContactSection.jsx";
import Footer from "../LandingPage/Footer.jsx";
import Navbar from "../LandingPage/Navbar.jsx";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section id="navbar">
        <Navbar />
      </section>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="features">
        <FeatureSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default LandingPage;
