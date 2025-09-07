import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import Topbar from "../components/Topbar";
import { useTranslation } from "react-i18next";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const AdminAnalytics = () => {
  const { t } = useTranslation();

  const data = [
    { name: "Computer Science Engineering", value: 25 },
    { name: "Information Technology", value: 20 },
    { name: "Civil Engineering", value: 15 },
    { name: "Mechanical Engineering", value: 10 },
  ];

  const COLORS = ["#22c55e", "#a3e635", "#000000", "#059669"];

  const colorMapping = {
    "Computer Science Engineering": "#22c55e",
    "Information Technology": "#a3e635",
    "Civil Engineering": "#000000",
    "Mechanical Engineering": "#059669",
  };

  return (
    <div className="flex min-h-screen bg-[#fdf6e3]">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 flex flex-col">
        {/* Topbar */}
        <div className="sticky top-0 z-20 bg-[#fdf6e3] shadow">
          <Topbar />
        </div>

        {/* Page Content */}
        <div className="p-8 space-y-8">
          {/* Top Chart Section */}
          <div className="bg-green-900 text-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              {t("adminAnalytics.topStressedDepartments")}
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <PieChart width={300} height={300}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>

              {/* Legend */}
              <div className="mt-6 lg:mt-0 lg:ml-10 space-y-2">
                {data.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span
                      className="inline-block w-4 h-4 rounded-sm"
                      style={{ backgroundColor: colorMapping[item.name] }}
                    ></span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-green-900 text-white p-6 rounded-2xl shadow-lg text-center">
              <h3 className="text-lg font-semibold">{t("adminAnalytics.stressed")}</h3>
              <p className="text-4xl font-bold mt-2">25</p>
              <p className="text-sm mt-1">
                {t("adminAnalytics.studentsPercent", { percent: 21 })}
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-green-900 text-white p-6 rounded-2xl shadow-lg text-center">
              <h3 className="text-lg font-semibold">{t("adminAnalytics.highlyStressed")}</h3>
              <p className="text-4xl font-bold mt-2">35</p>
              <p className="text-sm mt-1">
                {t("adminAnalytics.studentsPercent", { percent: 30 })}
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fdf6e3] border border-green-900 text-green-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold mb-3">{t("adminAnalytics.departments")}</h3>
              <ul className="space-y-2">
                {data.map((d, i) => (
                  <li key={i}>{d.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
