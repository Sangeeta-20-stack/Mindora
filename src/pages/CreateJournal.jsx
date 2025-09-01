// src/pages/CreateJournal.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const CreateJournal = () => {
  const [mood, setMood] = useState("");
  const [availableActivities, setAvailableActivities] = useState([
    "Exercise",
    "Reading",
    "Meditation",
  ]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [newActivity, setNewActivity] = useState("");

  const [availableGoals, setAvailableGoals] = useState([]);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");

  const [journalEntry, setJournalEntry] = useState("");

  const navigate = useNavigate();

  // Add a new activity
  const addActivity = () => {
    if (newActivity.trim() && !availableActivities.includes(newActivity)) {
      setAvailableActivities([...availableActivities, newActivity]);
    }
    setNewActivity("");
  };

  // Toggle activity selection
  const toggleActivity = (act) => {
    setSelectedActivities((prev) =>
      prev.includes(act) ? prev.filter((a) => a !== act) : [...prev, act]
    );
  };

  // Add a new goal
  const addGoal = () => {
    if (newGoal.trim() && !availableGoals.includes(newGoal)) {
      setAvailableGoals([...availableGoals, newGoal]);
    }
    setNewGoal("");
  };

  // Toggle goal selection
  const toggleGoal = (goal) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  // Save journal entry
  const handleSave = () => {
    if (!mood || !journalEntry.trim()) {
      alert("Mood and journal entry are required!");
      return;
    }

    const newEntry = {
      id: Date.now(),
      mood,
      activities: selectedActivities,
      goals: selectedGoals,
      content: journalEntry,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    const existingEntries =
      JSON.parse(localStorage.getItem("journalEntries")) || [];
    existingEntries.push(newEntry);
    localStorage.setItem("journalEntries", JSON.stringify(existingEntries));

    navigate("/journal");
  };

  const moods = [
    { label: "Epic", emoji: "🤩" },
    { label: "Good", emoji: "😊" },
    { label: "Okay", emoji: "😐" },
    { label: "Bad", emoji: "😔" },
    { label: "Awful", emoji: "😢" },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex flex-col flex-1">
        <Topbar />

        <div className="flex-1 overflow-y-auto p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-teal-700">
              ✍️ Create Journal Entry
            </h1>
            <button
              onClick={() => navigate("/journal")}
              className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition"
            >
              <ArrowLeft size={20} /> Back
            </button>
          </div>

          {/* Mood */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <label className="block text-lg font-semibold mb-3 text-gray-700">
              How are you feeling today? <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4 flex-wrap">
              {moods.map((m) => (
                <button
                  key={m.label}
                  onClick={() => setMood(m.label)}
                  className={`px-5 py-3 rounded-xl border flex items-center gap-2 text-lg transition shadow-sm
                    ${
                      mood === m.label
                        ? "bg-teal-600 text-white shadow-md"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <span>{m.emoji}</span> {m.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Activities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <label className="block text-lg font-semibold mb-3 text-gray-700">
              Activities (optional)
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {availableActivities.map((act, idx) => (
                <button
                  key={idx}
                  onClick={() => toggleActivity(act)}
                  className={`px-4 py-2 rounded-full border text-sm transition shadow-sm ${
                    selectedActivities.includes(act)
                      ? "bg-teal-600 text-white border-teal-600 shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
                  }`}
                >
                  {act}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newActivity}
                onChange={(e) => setNewActivity(e.target.value)}
                placeholder="Add a new activity..."
                className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
              />
              <button
                onClick={addActivity}
                className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700"
              >
                Add
              </button>
            </div>
          </motion.div>

          {/* Goals */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <label className="block text-lg font-semibold mb-3 text-gray-700">
              Goals (optional)
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {availableGoals.map((goal, idx) => (
                <button
                  key={idx}
                  onClick={() => toggleGoal(goal)}
                  className={`px-4 py-2 rounded-full border text-sm transition shadow-sm ${
                    selectedGoals.includes(goal)
                      ? "bg-green-600 text-white border-green-600 shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newGoal}
                onChange={(e) => setNewGoal(e.target.value)}
                placeholder="Add a new goal..."
                className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              />
              <button
                onClick={addGoal}
                className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
              >
                Add
              </button>
            </div>
          </motion.div>

          {/* Journal Entry */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <label className="block text-lg font-semibold text-gray-700 mb-3">
              Journal Entry <span className="text-red-500">*</span>
            </label>
            <textarea
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              placeholder="Write your thoughts and experiences here..."
              rows={8}
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </motion.div>

          {/* Save Button */}
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={handleSave}
            className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 shadow-lg"
          >
            💾 Save Journal Entry
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CreateJournal;


