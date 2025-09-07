import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import QuickStatsCard from "../components/QuickStatsCard";
import StressChart from "../components/StressChart";

const AdminDashboard = () => {
  const [analytics, setAnalytics] = useState(null);

  // Simulate API fetch
  useEffect(() => {
    const fetchAnalytics = async () => {
      // Replace with real API call
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
                "Anonymous post on stress",
                "Forum entry about exams",
                "New wellness buddy request",
                "Reflection entry added",
                "Doctor consultation booked",
              ],
            }),
          1000
        )
      );
      setAnalytics(data);
    };

    fetchAnalytics();
  }, []);

  if (!analytics) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1">
        <AdminTopbar />

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
          <div className="bg-green-900 text-white p-5 rounded-2xl">
            <h3 className="font-bold text-lg">Recent Activity Feed</h3>
            <ul className="list-disc ml-6 mt-2">
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
