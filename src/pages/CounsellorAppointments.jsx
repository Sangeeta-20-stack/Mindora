import React from "react";
import CounsellorSidebar from "../components/CounsellorSidebar";
import Topbar from "../components/Topbar";
import { useTranslation } from "react-i18next";

const CounsellorAppointments = () => {
  const { t } = useTranslation();

  // ✅ Get current date and month
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" }); // e.g., "September"

  return (
    <div className="flex min-h-screen bg-[#fdf6e3]">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64">
        <CounsellorSidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 flex flex-col">
        {/* Topbar */}
        <div className="sticky top-0 z-20 bg-[#fdf6e3] shadow">
          <Topbar />
        </div>

        {/* Page Content */}
        <div className="p-8">
          {/* Header */}
          <h1 className="text-3xl font-bold text-green-900 mb-6">
            {t("counsellor.appointmentSchedule")}
          </h1>

          {/* Appointment Schedule Box */}
          <div className="bg-green-900 text-white p-6 rounded-3xl shadow-md">
            {/* Title */}
            <h2 className="text-xl font-semibold mb-4">
              {t("counsellor.appointmentSchedule")}
            </h2>
            <hr className="border-dotted border-2 border-purple-400 mb-6" />

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Active Sessions */}
              <div className="bg-[#fdf6e3] text-green-900 p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold text-lg mb-4">
                  {t("counsellor.activeSessions")} ({t("counsellor.today")})
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-red-500"></span>
                    3 pm, Online
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
                    5 pm, {t("counsellor.offlineCollege")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                    10 pm, {t("counsellor.onlineCall")}
                  </li>
                </ul>
              </div>

              {/* Upcoming Sessions */}
              <div className="bg-[#fdf6e3] text-green-900 p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold text-lg mb-4">
                  {t("counsellor.upcomingSessions")}
                </h3>
                <p className="text-sm text-gray-700">
                  {t("counsellor.noUpcoming")}
                </p>
              </div>

              {/* Calendar Card */}
              <div className="bg-green-800 flex flex-col items-center justify-center p-6 rounded-2xl shadow-md">
                <div className="bg-white rounded-2xl p-6 text-center">
                  <p className="text-red-600 font-bold text-lg">{month}</p>
                  <p className="text-4xl font-bold text-green-900">{day}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounsellorAppointments;
