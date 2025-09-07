// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AdminSidebar from "../components/AdminSidebar";
import Topbar from "../components/Topbar";
import QuickStatsCard from "../components/QuickStatsCard";
import StressChart from "../components/StressChart";

const AdminDashboard = () => {
  const { t } = useTranslation();
  const [analytics, setAnalytics] = useState(null);

  // Simulate API fetch
  useEffect(() => {
    const fetchAnalytics = async () => {
      const data = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              activeStudents: 345,
              anonymousChats: 1200,
              appointmentsPending: 5,
              stressStats: [
                { name: "CSE", value: 62 },
                { name: "IT", value: 26 },
                { name: "Electrical", value: 12 },
              ],
              recentActivity: [
                t("adminDashboard.anonymousPost"),
                t("adminDashboard.forumEntry"),
                t("adminDashboard.wellnessRequest"),
                t("adminDashboard.reflectionAdded"),
                t("adminDashboard.doctorBooked"),
              ],
            }),
          1000
        )
      );
      setAnalytics(data);
    };

    fetchAnalytics();
  }, [t]);

  if (!analytics) {
    return (
      <div className="flex items-center justify-center h-screen">
        {t("adminDashboard.loading")}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#fdf6e3]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-green-900">
        <AdminSidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        <Topbar />

        {/* Cards */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <QuickStatsCard
            activeStudents={analytics.activeStudents}
            anonymousChats={analytics.anonymousChats}
            appointmentsPending={analytics.appointmentsPending}
          />
          <StressChart data={analytics.stressStats} />
        </div>

        {/* Recent Activity */}
        <div className="p-6">
          <div className="bg-green-900 text-white p-5 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg">
              {t("adminDashboard.recentActivityFeed")}
            </h3>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              {analytics.recentActivity.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
