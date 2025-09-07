// src/pages/DailyMoodTracker.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const DailyMoodTracker = () => {
  const { t } = useTranslation();

  const [mood, setMood] = useState("");
  const [habits, setHabits] = useState([]);
  const [sleep, setSleep] = useState("");
  const [energy, setEnergy] = useState("");
  const [affirmations, setAffirmations] = useState([]);

  // Load saved data
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("dailyMoodTracker")) || {};
    if (saved.mood) setMood(saved.mood);
    if (saved.habits) setHabits(saved.habits);
    if (saved.sleep) setSleep(saved.sleep);
    if (saved.energy) setEnergy(saved.energy);
    if (saved.affirmations) setAffirmations(saved.affirmations);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(
      "dailyMoodTracker",
      JSON.stringify({ mood, habits, sleep, energy, affirmations })
    );
  }, [mood, habits, sleep, energy, affirmations]);

  const toggleHabit = (habit) => {
    setHabits((prev) =>
      prev.includes(habit) ? prev.filter((h) => h !== habit) : [...prev, habit]
    );
  };

  const toggleAffirmation = (a) => {
    setAffirmations((prev) =>
      prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]
    );
  };

  const moods = t("dailyMoodTracker.moodSection.options", { returnObjects: true });
  const habitOptions = t("dailyMoodTracker.habitSection.options", { returnObjects: true });
  const affirmationList = t("dailyMoodTracker.affirmationSection.list", { returnObjects: true });
  const energyOptions = t("dailyMoodTracker.sleepEnergySection.energyOptions", { returnObjects: true });

  return (
    <div className="flex bg-[#fdf6e3] h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1 ml-64">
        <Topbar />

        <div className="p-6 space-y-8 overflow-y-auto">
          {/* Page Header */}
          <h1 className="text-3xl font-bold text-green-900">{t("dailyMoodTracker.pageTitle")}</h1>

          {/* Mood Selector */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-green-200">
            <h2 className="text-xl font-semibold text-green-900 mb-4">{t("dailyMoodTracker.moodSection.title")}</h2>
            <div className="flex flex-wrap gap-3">
              {Object.entries(moods).map(([key, label]) => (
                <motion.button
                  key={key}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMood(label)}
                  className={`px-4 py-2 rounded-lg border ${
                    mood === label
                      ? "bg-green-900 text-white border-green-900"
                      : "bg-green-50 text-green-900 border-green-300 hover:bg-green-100"
                  }`}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Habit Tracker */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-green-200">
            <h2 className="text-xl font-semibold text-green-900 mb-4">{t("dailyMoodTracker.habitSection.title")}</h2>
            <div className="flex flex-wrap gap-3">
              {Object.entries(habitOptions).map(([key, label]) => (
                <motion.button
                  key={key}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleHabit(label)}
                  className={`px-4 py-2 rounded-lg border ${
                    habits.includes(label)
                      ? "bg-green-900 text-white border-green-900"
                      : "bg-green-50 text-green-900 border-green-300 hover:bg-green-100"
                  }`}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Affirmations */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-green-200">
            <h2 className="text-xl font-semibold text-green-900 mb-4">{t("dailyMoodTracker.affirmationSection.title")}</h2>
            <div className="flex flex-wrap gap-3">
              {Object.entries(affirmationList).map(([key, label]) => (
                <motion.button
                  key={key}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleAffirmation(label)}
                  className={`px-4 py-2 rounded-lg border text-sm ${
                    affirmations.includes(label)
                      ? "bg-green-900 text-white border-green-900"
                      : "bg-green-50 text-green-900 border-green-300 hover:bg-green-100"
                  }`}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Sleep & Energy */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-green-200">
            <h2 className="text-xl font-semibold text-green-900 mb-4">{t("dailyMoodTracker.sleepEnergySection.title")}</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="number"
                value={sleep}
                onChange={(e) => setSleep(e.target.value)}
                placeholder={t("dailyMoodTracker.sleepEnergySection.sleepPlaceholder")}
                className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-[#fdf6e3]"
              />
              <select
                value={energy}
                onChange={(e) => setEnergy(e.target.value)}
                className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-[#fdf6e3]"
              >
                <option value="">{t("dailyMoodTracker.sleepEnergySection.energyPlaceholder")}</option>
                {Object.entries(energyOptions).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyMoodTracker;
