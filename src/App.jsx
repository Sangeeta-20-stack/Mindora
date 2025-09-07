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

// ✅ Import Admin Pages
import AdminDashboard from "../src/pages/AdminDashboard";
import ManageResources from "../src/pages/ManageResources";
import AdminAnalytics from "../src/pages/AdminAnalytics"; 
import CommunityForum from "../src/pages/CommunityForum"; 
import ForumModeration from "../src/pages/ForumModeration"; 
import FeedbackInbox from "./pages/FeedbackInbox";

// ✅ Import Counsellor Pages
import CounsellorDashboard from "../src/pages/CounsellorDashboard";
import CounsellorAppointments from "./pages/CounsellorAppointments";
import CounsellorCommunityWall from "./pages/CounsellorCommunityWall";

// ✅ Import Volunteer Pages
import VolunteerDashboard from "../src/pages/VolunteerDashboard";
import VolunteerCommunityChat from "../src/pages/VolunteerCommunityChat"; // ✅ New import

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

      {/* Community & Tracker */}
      <Route path="/community-wall" element={<CommunityWall />} />
      <Route path="/daily-mood-tracker" element={<DailyMoodTracker />} />
      <Route path="/help" element={<Help />} />

      {/* ✅ Admin Pages */}
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/manage-resources" element={<ManageResources />} />
      <Route path="/admin-analytics" element={<AdminAnalytics />} /> 
      <Route path="/community-forum" element={<CommunityForum />} /> 
      <Route path="/forum-moderation" element={<ForumModeration />} /> 
      <Route path="/feedback-inbox" element={<FeedbackInbox />} /> 

      {/* ✅ Counsellor Pages */}
      <Route path="/counsellor-dashboard" element={<CounsellorDashboard />} />
      <Route path="/counsellor-appointments" element={<CounsellorAppointments />} />
      <Route path="/counsellor-community-wall" element={<CounsellorCommunityWall />} />

      {/* ✅ Volunteer Pages */}
      <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />
      <Route path="/volunteer-community-chat" element={<VolunteerCommunityChat />} /> {/* ✅ Added */}
    </Routes>
  );
}

export default App;
