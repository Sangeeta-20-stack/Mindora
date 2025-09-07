// src/pages/CreateJournal.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";
import { useTranslation } from "react-i18next";

const CreateJournal = ({ onSave, initialData }) => {
  const { t } = useTranslation();
  const [mood, setMood] = useState("");
  const [availableActivities, setAvailableActivities] = useState([
    t("createJournal.defaultActivities.exercise"),
    t("createJournal.defaultActivities.reading"),
    t("createJournal.defaultActivities.meditation"),
  ]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [newActivity, setNewActivity] = useState("");

  const [availableGoals, setAvailableGoals] = useState([]);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");

  const [journalEntry, setJournalEntry] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (initialData) {
      setMood(initialData.mood || "");
      setSelectedActivities(initialData.activities || []);
      setSelectedGoals(initialData.goals || []);
      setJournalEntry(initialData.content || "");
      setImage(initialData.image || null);
    }
  }, [initialData]);

  const addActivity = () => {
    if (newActivity.trim() && !availableActivities.includes(newActivity)) {
      setAvailableActivities([...availableActivities, newActivity]);
    }
    setNewActivity("");
  };

  const toggleActivity = (act) => {
    setSelectedActivities((prev) =>
      prev.includes(act) ? prev.filter((a) => a !== act) : [...prev, act]
    );
  };

  const addGoal = () => {
    if (newGoal.trim() && !availableGoals.includes(newGoal)) {
      setAvailableGoals([...availableGoals, newGoal]);
    }
    setNewGoal("");
  };

  const toggleGoal = (goal) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!mood || !journalEntry.trim()) {
      alert(t("createJournal.errors.required"));
      return;
    }

    const newEntry = {
      id: initialData?.id || Date.now(),
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
    { label: t("createJournal.moods.epic"), emoji: "🤩" },
    { label: t("createJournal.moods.good"), emoji: "😊" },
    { label: t("createJournal.moods.okay"), emoji: "😐" },
    { label: t("createJournal.moods.bad"), emoji: "😔" },
    { label: t("createJournal.moods.awful"), emoji: "😢" },
  ];

  return (
    <div className="p-6 bg-[#fdf6e3] rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-green-900 mb-6">
        {initialData ? t("createJournal.editTitle") : t("createJournal.createTitle")}
      </h1>

      {/* Mood */}
      <motion.div className="mb-6">
        <label className="block text-lg font-semibold mb-3 text-green-800">
          {t("createJournal.moodQuestion")} <span className="text-red-500">*</span>
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
          {t("createJournal.activitiesTitle")}
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
            placeholder={t("createJournal.addActivityPlaceholder")}
            className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
          />
          <button
            onClick={addActivity}
            className="bg-green-900 text-white px-5 py-2 rounded-lg hover:bg-green-800"
          >
            {t("createJournal.addBtn")}
          </button>
        </div>
      </motion.div>

      {/* Goals */}
      <motion.div className="mb-6">
        <label className="block text-lg font-semibold mb-3 text-green-800">
          {t("createJournal.goalsTitle")}
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
            placeholder={t("createJournal.addGoalPlaceholder")}
            className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
          />
          <button
            onClick={addGoal}
            className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800"
          >
            {t("createJournal.addBtn")}
          </button>
        </div>
      </motion.div>

      {/* Journal Entry */}
      <motion.div className="mb-6">
        <label className="block text-lg font-semibold text-green-800 mb-3">
          {t("createJournal.entryTitle")} <span className="text-red-500">*</span>
        </label>
        <textarea
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
          placeholder={t("createJournal.entryPlaceholder")}
          rows={6}
          className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
        />
      </motion.div>

      {/* Image Upload */}
      <motion.div className="mb-6">
        <label className="block text-lg font-semibold text-green-800 mb-3">
          {t("createJournal.imageTitle")}
        </label>
        <label
          htmlFor="imageUpload"
          className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-green-400 rounded-xl cursor-pointer bg-white hover:bg-green-50 transition"
        >
          {image ? (
            <img
              src={image}
              alt={t("createJournal.imageAlt")}
              className="w-32 h-32 object-cover rounded-lg shadow-md"
            />
          ) : (
            <div className="flex flex-col items-center text-green-700">
              <Upload className="w-10 h-10 mb-2 text-green-600" />
              <span className="font-medium">{t("createJournal.uploadText")}</span>
              <span className="text-xs text-green-500">{t("createJournal.uploadHint")}</span>
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
        {initialData ? t("createJournal.updateBtn") : t("createJournal.saveBtn")}
      </motion.button>
    </div>
  );
};

export default CreateJournal;
