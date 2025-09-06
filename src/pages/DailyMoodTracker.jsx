// src/pages/DailyMoodTracker.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { motion } from "framer-motion";

const DailyMoodTracker = () => {
  const [mood, setMood] = useState("");
  const [habits, setHabits] = useState([]);
  const [sleep, setSleep] = useState("");
  const [energy, setEnergy] = useState("");
  const [affirmations, setAffirmations] = useState([]);

  // Available options
  const moods = ["😊 Happy", "😔 Sad", "😤 Stressed", "😴 Tired", "🤩 Excited"];
  const habitOptions = ["Drink Water", "Exercise", "Meditate", "Journal", "Sleep Early"];
  const affirmationList = [
    "I am capable and strong.",
    "I choose peace over worry.",
    "I am grateful for today.",
    "I deserve rest and balance.",
    "I am becoming my best self.",
  ];

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

  // Toggle habit selection
  const toggleHabit = (habit) => {
    setHabits((prev) =>
      prev.includes(habit) ? prev.filter((h) => h !== habit) : [...prev, habit]
    );
  };

  // Toggle affirmation selection
  const toggleAffirmation = (a) => {
    setAffirmations((prev) =>
      prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]
    );
  };

  return (
    <div className="flex bg-[#fdf6e3] h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content - FIXED with ml-64 so it doesn’t go behind sidebar */}
      <div className="flex flex-col flex-1 ml-64">
        <Topbar />

        <div className="p-6 space-y-8 overflow-y-auto">
          {/* Page Header */}
          <h1 className="text-3xl font-bold text-green-900">🌿 Daily Mood Tracker</h1>

          {/* Mood Selector */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-green-200">
            <h2 className="text-xl font-semibold text-green-900 mb-4">
              How are you feeling today?
            </h2>
            <div className="flex flex-wrap gap-3">
              {moods.map((m) => (
                <motion.button
                  key={m}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMood(m)}
                  className={`px-4 py-2 rounded-lg border ${
                    mood === m
                      ? "bg-green-900 text-white border-green-900"
                      : "bg-green-50 text-green-900 border-green-300 hover:bg-green-100"
                  }`}
                >
                  {m}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Habit Tracker */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-green-200">
            <h2 className="text-xl font-semibold text-green-900 mb-4">✅ Habit Tracker</h2>
            <div className="flex flex-wrap gap-3">
              {habitOptions.map((habit) => (
                <motion.button
                  key={habit}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleHabit(habit)}
                  className={`px-4 py-2 rounded-lg border ${
                    habits.includes(habit)
                      ? "bg-green-900 text-white border-green-900"
                      : "bg-green-50 text-green-900 border-green-300 hover:bg-green-100"
                  }`}
                >
                  {habit}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Affirmations */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-green-200">
            <h2 className="text-xl font-semibold text-green-900 mb-4">🌸 Affirmations</h2>
            <div className="flex flex-wrap gap-3">
              {affirmationList.map((a) => (
                <motion.button
                  key={a}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleAffirmation(a)}
                  className={`px-4 py-2 rounded-lg border text-sm ${
                    affirmations.includes(a)
                      ? "bg-green-900 text-white border-green-900"
                      : "bg-green-50 text-green-900 border-green-300 hover:bg-green-100"
                  }`}
                >
                  {a}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Sleep & Energy Tracker */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-green-200">
            <h2 className="text-xl font-semibold text-green-900 mb-4">😴 Sleep & Energy</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="number"
                value={sleep}
                onChange={(e) => setSleep(e.target.value)}
                placeholder="Hours of sleep"
                className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-[#fdf6e3]"
              />
              <select
                value={energy}
                onChange={(e) => setEnergy(e.target.value)}
                className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-[#fdf6e3]"
              >
                <option value="">Energy level</option>
                <option value="Low">🔴 Low</option>
                <option value="Medium">🟡 Medium</option>
                <option value="High">🟢 High</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyMoodTracker;
