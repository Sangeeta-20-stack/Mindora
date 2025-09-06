import { Routes, Route } from "react-router-dom";
import LandingPage from "../src/components/LandingPage/LandingPage";
import Signup from "../src/components/Signup";
import Login from "../src/components/Login";
import Dashboard from "../src/pages/Dashboard";
import Account from "../src/pages/Account";
import Settings from "../src/pages/Settings";
import CalendarPage from "../src/pages/CalendarPage";
import Analytics from "../src/pages/Analytics";
import Journal from "../src/pages/Journal";
import CreateJournal from "../src/pages/CreateJournal";
import Feedback from "../src/pages/Feedback";
import Doctor from "../src/pages/Doctor";
import EmergencyHelpline from "../src/pages/EmergencyHelpline"; // ✅ Import new page

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* Other Pages */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/account" element={<Account />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/create-journal" element={<CreateJournal />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/emergency-helpline" element={<EmergencyHelpline />} /> 
      {/* ✅ Added route */}
    </Routes>
  );
}

export default App;
