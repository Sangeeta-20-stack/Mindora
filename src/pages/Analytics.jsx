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
import { useTranslation } from "react-i18next"; 
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
  const { t } = useTranslation();

  // Load reflections from localStorage
  const loadEntries = () => {
    const stored = JSON.parse(localStorage.getItem("journalEntries")) || [];
    setEntries(stored);
  };

  useEffect(() => {
    loadEntries();
    const handleStorageChange = () => loadEntries();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const totalEntries = entries.length;

  const wordCounts = entries.map((e) => ({
    date: e.date || "Unknown",
    words: e.content ? e.content.split(" ").length : 0,
  }));

  const analyzeSentiment = (text) => {
    if (!text) return "Neutral";
    const lower = text.toLowerCase();
    if (lower.includes("happy") || lower.includes("grateful") || lower.includes("excited")) return "Positive";
    if (lower.includes("sad") || lower.includes("tired") || lower.includes("stressed")) return "Negative";
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

  // ✅ keep key for color, name for translation
  const sentimentData = Object.keys(sentimentCounts).map((s) => ({
    key: s, 
    name: t(`analytics.sentiments.${s.toLowerCase()}`), 
    value: sentimentCounts[s],
  }));

  const weeklyData = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"].map(
    (day, idx) => ({
      day: t(`analytics.days.${day}`),
      entries: entries.filter((e) => {
        const d = new Date(e.date);
        return !isNaN(d) && d.getDay() === idx;
      }).length,
    })
  );

  return (
    <div
      className="
        flex min-h-screen 
        bg-[#fdf6e3] text-green-900 
        dark:bg-gray-900 dark:text-gray-100
        transition-colors duration-300
      "
    >
      <aside
        className="
          fixed left-0 top-0 h-full w-64
          bg-green-900 text-white
          dark:bg-gray-800 dark:text-gray-100
          transition-colors duration-300
        "
      >
        <Sidebar />
      </aside>

      <div className="flex-1 flex flex-col ml-64">
        <Topbar title={t("analytics.title")} />

        <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-3xl font-bold mb-6 text-green-900 dark:text-green-300 text-center">
            {t("analytics.subtitle")}
          </h2>

          {totalEntries === 0 ? (
            <div
              className="
                p-8 rounded-xl shadow-md text-center border
                bg-[#fdf6e3] border-green-200 text-green-900
                dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100
              "
            >
              <p className="text-lg">{t("analytics.noReflections")}</p>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                {t("analytics.hint")}
              </p>
            </div>
          ) : (
            <>
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <StatCard title={t("analytics.totalReflections")} value={totalEntries} color="green" />
                <StatCard
                  title={t("analytics.avgWords")}
                  value={
                    wordCounts.length > 0
                      ? Math.round(wordCounts.reduce((a, b) => a + b.words, 0) / wordCounts.length)
                      : 0
                  }
                  color="purple"
                />
                <StatCard
                  title={t("analytics.dominantSentiment")}
                  value={Object.keys(sentimentCounts).reduce((a, b) =>
                    sentimentCounts[a] > sentimentCounts[b] ? a : b
                  )}
                  color="orange"
                />
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Sentiment Pie Chart */}
                <div
                  className="
                    p-6 rounded-xl shadow-md border
                    bg-white border-green-200 text-green-900
                    dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100
                    transition-colors duration-300
                  "
                >
                  <h3 className="text-lg font-semibold mb-3">
                    {t("analytics.sentimentDistribution")}
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
                          <Cell key={`cell-${index}`} fill={COLORS[entry.key]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Weekly Activity Bar Chart */}
                <div
                  className="
                    p-6 rounded-xl shadow-md border
                    bg-white border-green-200 text-green-900
                    dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100
                    transition-colors duration-300
                  "
                >
                  <h3 className="text-lg font-semibold mb-3">
                    {t("analytics.reflectionsPerDay")}
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={weeklyData}>
                      <XAxis dataKey="day" stroke="currentColor" />
                      <YAxis stroke="currentColor" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--tw-bg-opacity, #fff)",
                          color: "inherit",
                        }}
                      />
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
    green: "bg-green-900 text-white dark:bg-green-700",
    purple: "bg-purple-600 text-white dark:bg-purple-500",
    orange: "bg-orange-500 text-white dark:bg-orange-400",
  };
  return (
    <div
      className="
        p-6 rounded-xl text-center shadow-md border
        bg-white border-green-200 text-green-900
        dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100
        transition-colors duration-300
      "
    >
      <h4 className={`text-sm font-semibold ${colors[color]} px-3 py-1 rounded-full inline-block`}>
        {title}
      </h4>
      <p className="text-3xl font-bold mt-3">{value}</p>
    </div>
  );
};

export default Analytics;
