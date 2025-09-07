// src/App.jsx
import { Routes, Route } from "react-router-dom";
import LandingPage from "../src/components/LandingPage/LandingPage";
import Signup from "../src/components/Signup";
import Login from "../src/components/Login";
import Dashboard from "../src/pages/Dashboard";
import Account from "../src/pages/Account";
import Settings from "../src/pages/Settings";
import CalendarPage from "../src/pages/CalendarPage";
import Analytics from "../src/pages/Analytics";
import ReflectionBox from "./pages/ReflectionBox";  
import Feedback from "../src/pages/Feedback";
import Doctor from "../src/pages/Doctor";
import EmergencyHelpline from "../src/pages/EmergencyHelpline"; 
import WellnessBuddy from "../src/pages/WellnessBuddy"; 
import StressCheck from "../src/pages/StressCheck"; 
import Relaxation from "../src/pages/Relaxation"; 
import CommunityWall from "../src/pages/CommunityWall";  
import DailyMoodTracker from "../src/pages/DailyMoodTracker"; 
import Help from "../src/pages/Help"; 

// ✅ Import Admin Dashboard
import AdminDashboard from "../src/pages/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* Auth Pages */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* Main Pages */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/account" element={<Account />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/analytics" element={<Analytics />} />

      {/* Reflection Box */}
      <Route path="/reflection" element={<ReflectionBox />} />

      {/* Other Features */}
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/emergency-helpline" element={<EmergencyHelpline />} /> 
      <Route path="/wellness-buddy" element={<WellnessBuddy />} /> 
      <Route path="/stress-check" element={<StressCheck />} /> 
      <Route path="/relaxation" element={<Relaxation />} /> 

      {/* ✅ Community Wall */}
      <Route path="/community-wall" element={<CommunityWall />} />

      {/* ✅ Daily Mood Tracker */}
      <Route path="/daily-mood-tracker" element={<DailyMoodTracker />} />

      {/* ✅ Help Page */}
      <Route path="/help" element={<Help />} />

      {/* ✅ Admin Dashboard */}
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
