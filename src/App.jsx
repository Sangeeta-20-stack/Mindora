import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeatureSection from "./components/FeatureSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard"; 
import Account from "./pages/Account";     
import Settings from "./pages/Settings";   
import CalendarPage from "./pages/CalendarPage";
import Analytics from "./pages/Analytics";
import Journal from "./pages/Journal";   // ✅ import Journal page
import CreateJournal from "./pages/CreateJournal";
import Feedback from "./pages/Feedback";
import Doctor from "./pages/Doctor"; 


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

      {/* Account Page */}
      <Route path="/account" element={<Account />} />

      {/* Settings Page */}
      <Route path="/settings" element={<Settings />} />

      {/* Calendar Page */}
      <Route path="/calendar" element={<CalendarPage />} />

      {/* Analytics Page */}
      <Route path="/analytics" element={<Analytics />} />

      {/* Journal Page  */}
      <Route path="/journal" element={<Journal />} />

       <Route path="/create-journal" element={<CreateJournal />} />

       <Route path="/feedback" element={<Feedback />} />

       <Route path="/doctor" element={<Doctor />} /> 
    </Routes>
  );
}

export default App;
