// src/pages/Dashboard.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import WelcomeCard from "../components/WelcomeCard";
import FeatureGrid from "../components/FeatureGrid";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen bg-[#f7f6d5]">
      {/* Sidebar */}
      <aside className="w-64 bg-green-900 flex-shrink-0 h-screen fixed">
        <Sidebar />
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col ml-64 overflow-y-auto h-screen">
        {/* Topbar (sticky) */}
        <div className="sticky top-0 z-10">
          <Topbar />
        </div>

        {/* Scrollable main area */}
        <main className="p-6 space-y-6">
          {/* Welcome Section */}
          <WelcomeCard 
            title={t("dashboard.welcomeCard.title")}
            subtitle={t("dashboard.welcomeCard.subtitle")}
          />

          {/* Features grid */}
          <FeatureGrid
            features={{
              moodTracker: t("dashboard.features.items.moodTracker"),
              habitTracker: t("dashboard.features.items.habitTracker"),
              affirmations: t("dashboard.features.items.affirmations"),
              sleepEnergy: t("dashboard.features.items.sleepEnergy"),
              calendar: t("dashboard.features.items.calendar"),
              insights: t("dashboard.features.items.insights"),
            }}
          />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
