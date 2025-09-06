// src/pages/Analytics.jsx
import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

// consistent mood colors
const COLORS = {
  happy: "#22c55e",   // green
  neutral: "#facc15", // yellow
  sad: "#f97316",     // orange
  angry: "#ef4444",   // red
  love: "#9333ea",    // purple
  upset: "#64748b",   // gray
};

const Analytics = () => {
  const [entries, setEntries] = useState([]);
  const [range, setRange] = useState("all");
  const [filteredEntries, setFilteredEntries] = useState([]);

  // Load moodTracker from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("moodHistory")) || [];
    setEntries(stored);
  }, []);

  // Filter entries by range
  useEffect(() => {
    let data = [...entries];
    const today = new Date();

    if (range === "week") {
      let weekAgo = new Date();
      weekAgo.setDate(today.getDate() - 7);
      data = data.filter((e) => new Date(e.date) >= weekAgo);
    } else if (range === "month") {
      let monthAgo = new Date();
      monthAgo.setMonth(today.getMonth() - 1);
      data = data.filter((e) => new Date(e.date) >= monthAgo);
    }
    setFilteredEntries(data);
  }, [range, entries]);

  const totalEntries = filteredEntries.length;

  // Mood distribution
  const moodCounts = Object.keys(COLORS).map((mood) => ({
    name: mood,
    value: filteredEntries.filter((e) => e.mood === mood).length,
  }));

  // Weekly activity
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weekData = weekdays.map((day, idx) => ({
    day,
    entries: filteredEntries.filter(
      (e) => new Date(e.date).getDay() === idx
    ).length,
  }));

  return (
    <div className="flex min-h-screen bg-[#fdf6e3]">
      {/* Sidebar fixed */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-green-900">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        <Topbar title="Analytics" />

        <motion.div
          className="p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-green-900 text-center">
            📊 Analytics & Insights
          </h2>

          {/* Range selector */}
          <div className="flex gap-4 mb-6 justify-center">
            {["week", "month", "all"].map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={`px-4 py-2 rounded-lg border transition ${
                  range === r
                    ? "bg-green-900 text-white border-green-900"
                    : "bg-[#fdf6e3] border-green-700 text-green-900 hover:bg-green-100"
                }`}
              >
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </button>
            ))}
          </div>

          {totalEntries === 0 ? (
            // Empty state
            <div className="bg-[#fdf6e3] p-8 rounded-xl shadow-md text-center border border-green-200">
              <p className="text-green-900 text-lg">
                No entries available for <strong>{range}</strong> period.
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Track your mood daily to see analytics here.
              </p>
            </div>
          ) : (
            <>
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <StatCard
                  title="Total Entries"
                  value={totalEntries}
                  color="green"
                />
                <StatCard
                  title="Unique Moods"
                  value={moodCounts.filter((m) => m.value > 0).length}
                  color="purple"
                />
                <StatCard
                  title="Time Period"
                  value={range.toUpperCase()}
                  color="orange"
                />
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Pie Chart */}
                <div className="bg-[#fdf6e3] p-6 rounded-xl shadow-md border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-green-900">
                    Mood Distribution
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={moodCounts}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label
                      >
                        {moodCounts.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[entry.name]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Bar Chart */}
                <div className="bg-[#fdf6e3] p-6 rounded-xl shadow-md border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-green-900">
                    Weekly Activity
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={weekData}>
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar
                        dataKey="entries"
                        fill="#14532d"
                        radius={[6, 6, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

// Stat card
const StatCard = ({ title, value, color }) => {
  const colors = {
    green: "bg-green-900 text-white",
    purple: "bg-purple-600 text-white",
    orange: "bg-orange-500 text-white",
  };
  return (
    <div className="bg-[#fdf6e3] p-6 rounded-xl text-center shadow-md border border-green-200">
      <h4
        className={`text-sm font-semibold ${colors[color]} px-3 py-1 rounded-full inline-block`}
      >
        {title}
      </h4>
      <p className="text-3xl font-bold mt-3 text-green-900">{value}</p>
    </div>
  );
};

export default Analytics;
