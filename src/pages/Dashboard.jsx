import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import WelcomeCard from "../components/WelcomeCard";
import FeatureGrid from "../components/FeatureGrid";
import MoodTracker from "../components/MoodTracker";
import MentalHealthSurvey from "../components/MentalHealthSurvey";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6 space-y-6">
          <WelcomeCard />
          <FeatureGrid />
          <MoodTracker />
          {/* Stacked cards appear here */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
