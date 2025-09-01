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

const COLORS = ["#22c55e", "#facc15", "#f97316", "#ef4444", "#9333ea"]; // moods colors

const Analytics = () => {
  // Mock entries for demo — replace with backend data later
  const [entries, setEntries] = useState([
    // Example data
    // { date: "2025-09-01", mood: "Great" },
    // { date: "2025-09-01", mood: "Good" },
    // { date: "2025-09-02", mood: "Okay" },
  ]);

  const [range, setRange] = useState("all"); // week | month | all
  const [filteredEntries, setFilteredEntries] = useState([]);

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

  const moodCounts = ["Great", "Good", "Okay", "Bad", "Awful"].map((mood) => ({
    name: mood,
    value: filteredEntries.filter((e) => e.mood === mood).length,
  }));

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weekData = weekdays.map((day, idx) => ({
    day,
    entries: filteredEntries.filter(
      (e) => new Date(e.date).getDay() === idx
    ).length,
  }));

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <motion.div
          className="p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            📊 Analytics & Insights
          </h2>

          {/* Range selector */}
          <div className="flex gap-4 mb-6">
            {["week", "month", "all"].map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={`px-4 py-2 rounded-lg border transition ${
                  range === r
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </button>
            ))}
          </div>

          {totalEntries === 0 ? (
            // Empty state
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <p className="text-gray-600 text-lg">
                No entries available for <strong>{range}</strong> period.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Start adding moods/reflections to see analytics here.
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
                  title="Mood Entries"
                  value={filteredEntries.filter((e) => e.mood).length}
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
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-semibold mb-3 text-gray-700">
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
                            fill={COLORS[index]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Bar Chart */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-semibold mb-3 text-gray-700">
                    Weekly Activity
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={weekData}>
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar
                        dataKey="entries"
                        fill="#3b82f6"
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

// Small stat card
const StatCard = ({ title, value, color }) => {
  const colors = {
    green: "bg-green-500 text-green-700",
    purple: "bg-purple-500 text-purple-700",
    orange: "bg-orange-400 text-orange-700",
  };
  return (
    <div className="bg-white p-6 rounded-xl text-center shadow-md">
      <h4
        className={`text-sm font-semibold ${colors[color]} bg-opacity-20 inline-block px-3 py-1 rounded-full`}
      >
        {title}
      </h4>
      <p className="text-3xl font-bold mt-3 text-gray-800">{value}</p>
    </div>
  );
};

export default Analytics;

