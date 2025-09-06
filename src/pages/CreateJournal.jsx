// src/pages/CreateJournal.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";

const CreateJournal = ({ onSave, initialData }) => {
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
  const [image, setImage] = useState(null);

  // ✅ Pre-fill when editing
  useEffect(() => {
    if (initialData) {
      setMood(initialData.mood || "");
      setSelectedActivities(initialData.activities || []);
      setSelectedGoals(initialData.goals || []);
      setJournalEntry(initialData.content || "");
      setImage(initialData.image || null);
    }
  }, [initialData]);

  // Add new activity
  const addActivity = () => {
    if (newActivity.trim() && !availableActivities.includes(newActivity)) {
      setAvailableActivities([...availableActivities, newActivity]);
    }
    setNewActivity("");
  };

  // Toggle activity
  const toggleActivity = (act) => {
    setSelectedActivities((prev) =>
      prev.includes(act) ? prev.filter((a) => a !== act) : [...prev, act]
    );
  };

  // Add new goal
  const addGoal = () => {
    if (newGoal.trim() && !availableGoals.includes(newGoal)) {
      setAvailableGoals([...availableGoals, newGoal]);
    }
    setNewGoal("");
  };

  // Toggle goal
  const toggleGoal = (goal) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Save entry (new or updated)
  const handleSave = () => {
    if (!mood || !journalEntry.trim()) {
      alert("Mood and journal entry are required!");
      return;
    }

    const newEntry = {
      id: initialData?.id || Date.now(), // ✅ keep same id if editing
      mood,
      activities: selectedActivities,
      goals: selectedGoals,
      content: journalEntry,
      image,
      date: initialData?.date || new Date().toLocaleDateString(),
      time: initialData?.time || new Date().toLocaleTimeString(),
    };

    if (onSave) {
      onSave(newEntry);
    }
  };

  const moods = [
    { label: "Epic", emoji: "🤩" },
    { label: "Good", emoji: "😊" },
    { label: "Okay", emoji: "😐" },
    { label: "Bad", emoji: "😔" },
    { label: "Awful", emoji: "😢" },
  ];

  return (
    <div className="p-6 bg-[#fdf6e3] rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-green-900 mb-6">
        {initialData ? "Edit Journal Entry" : "Create Journal Entry"}
      </h1>

      {/* Mood Section */}
      <motion.div className="mb-6">
        <label className="block text-lg font-semibold mb-3 text-green-800">
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
                    ? "bg-green-900 text-white shadow-md"
                    : "bg-white text-green-800 hover:bg-green-100 border-green-300"
                }`}
            >
              <span>{m.emoji}</span> {m.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Activities */}
      <motion.div className="mb-6">
        <label className="block text-lg font-semibold mb-3 text-green-800">
          Activities (optional)
        </label>
        <div className="flex flex-wrap gap-2 mb-3">
          {availableActivities.map((act, idx) => (
            <button
              key={idx}
              onClick={() => toggleActivity(act)}
              className={`px-4 py-2 rounded-full border text-sm transition shadow-sm ${
                selectedActivities.includes(act)
                  ? "bg-green-900 text-white border-green-900 shadow-md"
                  : "bg-white text-green-800 hover:bg-green-100 border-green-300"
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
            className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
          />
          <button
            onClick={addActivity}
            className="bg-green-900 text-white px-5 py-2 rounded-lg hover:bg-green-800"
          >
            Add
          </button>
        </div>
      </motion.div>

      {/* Goals */}
      <motion.div className="mb-6">
        <label className="block text-lg font-semibold mb-3 text-green-800">
          Goals (optional)
        </label>
        <div className="flex flex-wrap gap-2 mb-3">
          {availableGoals.map((goal, idx) => (
            <button
              key={idx}
              onClick={() => toggleGoal(goal)}
              className={`px-4 py-2 rounded-full border text-sm transition shadow-sm ${
                selectedGoals.includes(goal)
                  ? "bg-green-700 text-white border-green-700 shadow-md"
                  : "bg-white text-green-800 hover:bg-green-100 border-green-300"
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
            className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
          />
          <button
            onClick={addGoal}
            className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800"
          >
            Add
          </button>
        </div>
      </motion.div>

      {/* Journal Entry */}
      <motion.div className="mb-6">
        <label className="block text-lg font-semibold text-green-800 mb-3">
          Journal Entry <span className="text-red-500">*</span>
        </label>
        <textarea
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
          placeholder="Write your thoughts and experiences here..."
          rows={6}
          className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
        />
      </motion.div>

      {/* Image Upload */}
      <motion.div className="mb-6">
        <label className="block text-lg font-semibold text-green-800 mb-3">
          Attach an Image (optional)
        </label>
        <label
          htmlFor="imageUpload"
          className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-green-400 rounded-xl cursor-pointer bg-white hover:bg-green-50 transition"
        >
          {image ? (
            <img
              src={image}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-lg shadow-md"
            />
          ) : (
            <div className="flex flex-col items-center text-green-700">
              <Upload className="w-10 h-10 mb-2 text-green-600" />
              <span className="font-medium">Click to upload an image</span>
              <span className="text-xs text-green-500">(JPG, PNG, etc.)</span>
            </div>
          )}
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      </motion.div>

      {/* Save Button */}
      <motion.button
        onClick={handleSave}
        className="w-full bg-green-900 text-white py-3 rounded-lg font-semibold hover:bg-green-800 shadow-lg"
      >
        {initialData ? "Update Journal Entry" : "Save Journal Entry"}
      </motion.button>
    </div>
  );
};

export default CreateJournal;
