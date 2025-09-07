import React from "react";
import { useTranslation } from "react-i18next";
import VolunteerSidebar from "../components/VolunteerSidebar";
import Topbar from "../components/Topbar";

const VolunteerDashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen bg-[#fdf6e3]">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64">
        <VolunteerSidebar />
      </div>

      {/* Main Section */}
      <div className="ml-64 flex-1 flex flex-col">
        {/* Topbar */}
        <div className="sticky top-0 z-20 bg-[#fdf6e3] shadow">
          <Topbar />
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-green-900 mb-6">
            {t("volunteer.welcomeMessage", { name: "Volunteer" })}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dashboard card */}
            <div className="bg-green-900 text-white p-6 rounded-2xl shadow-lg text-center">
              <h2 className="text-xl font-semibold mb-3">
                {t("volunteer.dashboard")}
              </h2>
              <p>{t("volunteer.dashboardOverview")}</p>
            </div>

            {/* Community Chat card */}
            <div className="bg-green-900 text-white p-6 rounded-2xl shadow-lg text-center">
              <h2 className="text-xl font-semibold mb-3">
                {t("volunteer.communityChat")}
              </h2>
              <p>{t("volunteer.chatOverview")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
