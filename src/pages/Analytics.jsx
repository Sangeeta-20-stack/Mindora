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

// consistent sentiment colors
const COLORS = {
  Positive: "#22c55e", // green
  Neutral: "#facc15",  // yellow
  Negative: "#ef4444", // red
};

const Analytics = () => {
  const [entries, setEntries] = useState([]);

  // Load reflections from localStorage
  const loadEntries = () => {
    const stored = JSON.parse(localStorage.getItem("journalEntries")) || [];
    setEntries(stored);
  };

  useEffect(() => {
    loadEntries();

    // ✅ Listen for changes from ReflectionBox (localStorage updates)
    const handleStorageChange = () => loadEntries();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const totalEntries = entries.length;

  // Word count per entry
  const wordCounts = entries.map((e) => ({
    date: e.date || "Unknown",
    words: e.content ? e.content.split(" ").length : 0,
  }));

  // Simple sentiment analysis
  const analyzeSentiment = (text) => {
    if (!text) return "Neutral";
    const lower = text.toLowerCase();
    if (lower.includes("happy") || lower.includes("grateful") || lower.includes("excited")) {
      return "Positive";
    }
    if (lower.includes("sad") || lower.includes("tired") || lower.includes("stressed")) {
      return "Negative";
    }
    return "Neutral";
  };

  const sentimentCounts = entries.reduce(
    (acc, e) => {
      const s = analyzeSentiment(e.content);
      acc[s] = (acc[s] || 0) + 1;
      return acc;
    },
    { Positive: 0, Neutral: 0, Negative: 0 }
  );

  const sentimentData = Object.keys(sentimentCounts).map((s) => ({
    name: s,
    value: sentimentCounts[s],
  }));

  const weeklyData = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
    (day, idx) => ({
      day,
      entries: entries.filter((e) => {
        const d = new Date(e.date);
        return !isNaN(d) && d.getDay() === idx;
      }).length,
    })
  );

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
            Analytics & Insights from Reflections
          </h2>

          {totalEntries === 0 ? (
            <div className="bg-[#fdf6e3] p-8 rounded-xl shadow-md text-center border border-green-200">
              <p className="text-green-900 text-lg">No reflections yet.</p>
              <p className="text-gray-600 text-sm mt-2">
                Write in your Reflection Box to see insights here.
              </p>
            </div>
          ) : (
            <>
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <StatCard title="Total Reflections" value={totalEntries} color="green" />
                <StatCard
                  title="Avg. Words"
                  value={
                    wordCounts.length > 0
                      ? Math.round(
                          wordCounts.reduce((a, b) => a + b.words, 0) / wordCounts.length
                        )
                      : 0
                  }
                  color="purple"
                />
                <StatCard
                  title="Dominant Sentiment"
                  value={Object.keys(sentimentCounts).reduce((a, b) =>
                    sentimentCounts[a] > sentimentCounts[b] ? a : b
                  )}
                  color="orange"
                />
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Sentiment Pie Chart */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-green-900">
                    Sentiment Distribution
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={sentimentData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label
                      >
                        {sentimentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Weekly Activity */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-green-900">
                    Reflections Per Day
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={weeklyData}>
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="entries" fill="#14532d" radius={[6, 6, 0, 0]} />
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

// Stat card component
const StatCard = ({ title, value, color }) => {
  const colors = {
    green: "bg-green-900 text-white",
    purple: "bg-purple-600 text-white",
    orange: "bg-orange-500 text-white",
  };
  return (
    <div className="bg-white p-6 rounded-xl text-center shadow-md border border-green-200">
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
