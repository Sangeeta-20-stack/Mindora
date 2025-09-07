import React from "react";
import { useTranslation } from "react-i18next";
import CounsellorSidebar from "../components/CounsellorSidebar";
import Topbar from "../components/Topbar";

const CounsellorDashboard = () => {
  const { t } = useTranslation();

  // ✅ Get today's date & month dynamically
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" }); // e.g., September

  return (
    <div className="flex min-h-screen bg-[#fdf6e3] dark:bg-gray-950">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64">
        <CounsellorSidebar />
      </div>

      {/* Main Section */}
      <div className="ml-64 flex-1 flex flex-col">
        {/* Topbar */}
        <div className="sticky top-0 z-20 bg-[#fdf6e3] dark:bg-gray-900 shadow">
          <Topbar />
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Welcome */}
          <h1 className="text-3xl font-bold text-green-900 dark:text-green-200 mb-8">
            {t("welcomeMessage", { name: "MR Psychologist" })}
          </h1>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Appointment Overview */}
            <div className="bg-green-900 dark:bg-green-800 text-white p-6 rounded-2xl shadow-lg text-center">
              <h2 className="text-xl font-semibold mb-3">{t("overview")}</h2>
              <p>{t("upcomingAppointments")}</p>
              <p className="mt-2 text-sm text-gray-200 dark:text-gray-300">
                {t("shortDetails")}
              </p>
            </div>

            {/* Community Overview */}
            <div className="bg-green-900 dark:bg-green-800 text-white p-6 rounded-2xl shadow-lg text-center">
              <h2 className="text-xl font-semibold mb-3">{t("overview")}</h2>
              <p>{t("upcomingCommunityChats")}</p>
              <p className="mt-2 text-sm text-gray-200 dark:text-gray-300">
                {t("shortDetails")}
              </p>
            </div>

            {/* Calendar */}
            <div className="bg-green-900 dark:bg-green-800 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center">
              <div className="bg-white dark:bg-gray-100 text-green-900 px-6 py-4 rounded-2xl shadow-lg text-center">
                <p className="text-lg font-bold text-red-600">{month}</p>
                <p className="text-4xl font-extrabold">{day}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounsellorDashboard;
