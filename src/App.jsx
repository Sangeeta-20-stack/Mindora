import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeatureSection from "./components/FeatureSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard"; // 👈 Dashboard page

function App() {
  return (
    <Routes>
      {/* Main Landing Page */}
      <Route
        path="/"
        element={
          <>
            <Navbar />

            {/* Hero Section */}
            <section id="home">
              <HeroSection />
            </section>

            {/* About Section */}
            <section id="about">
              <AboutSection />
            </section>

            {/* Feature Section */}
            <section id="features">
              <FeatureSection />
            </section>

            {/* Contact Section */}
            <section id="contact">
              <ContactSection />
            </section>

            {/* Footer */}
            <Footer />
          </>
        }
      />

      {/* Signup Page */}
      <Route path="/signup" element={<Signup />} />

      {/* Login Page */}
      <Route path="/login" element={<Login />} />

      {/* Dashboard Page */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
