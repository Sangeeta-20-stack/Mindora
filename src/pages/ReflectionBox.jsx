// src/pages/ReflectionBox.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, Edit3, X } from "lucide-react";
import CreateJournal from "./CreateJournal";

const ReflectionBox = () => {
  const { t } = useTranslation();
  const [entries, setEntries] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("journalEntries")) || [];
    setEntries(stored);
  }, []);

  const handleDelete = (id) => {
    const updated = entries.filter((entry) => entry.id !== id);
    setEntries(updated);
    localStorage.setItem("journalEntries", JSON.stringify(updated));

    const moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];
    const updatedMoodHistory = moodHistory.filter((entry) => entry.id !== id);
    localStorage.setItem("moodHistory", JSON.stringify(updatedMoodHistory));
  };

  const handleSave = (newEntry) => {
    let updated;

    if (editingEntry) {
      updated = entries.map((entry) =>
        entry.id === editingEntry.id ? newEntry : entry
      );
    } else {
      updated = [...entries, newEntry];

      const moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];
      const moodEntry = {
        id: newEntry.id,
        mood: newEntry.mood?.toLowerCase() || "neutral",
        date: newEntry.date,
        time: newEntry.time,
      };
      localStorage.setItem("moodHistory", JSON.stringify([...moodHistory, moodEntry]));
    }

    setEntries(updated);
    localStorage.setItem("journalEntries", JSON.stringify(updated));
    setShowForm(false);
    setEditingEntry(null);
  };

  return (
    <div className="flex h-screen bg-[#fdf6e3]">
      <aside className="w-64 fixed h-screen bg-green-900">
        <Sidebar />
      </aside>

      <div className="flex flex-col flex-1 ml-64">
        <Topbar title={t("reflectionBox.title")} />

        <div className="p-6 overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-green-900 flex items-center gap-2">
              {t("reflectionBox.title")}
              <span className="text-green-700 text-lg font-normal">
                ({entries.length} {t("reflectionBox.reflections")})
              </span>
            </h2>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setEditingEntry(null);
                setShowForm(true);
              }}
              className="px-4 py-2 bg-green-900 text-white rounded-lg flex items-center gap-2 shadow hover:bg-green-800 transition"
            >
              <Plus size={18} /> {t("reflectionBox.newReflection")}
            </motion.button>
          </div>

          {/* Reflections List */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence>
              {entries.map((entry, index) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-green-900 text-white p-6 rounded-2xl shadow-lg"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">
                      {entry.mood || t("reflectionBox.untitled")}
                    </h3>
                    <span className="text-sm text-green-200">
                      {entry.date} {entry.time}
                    </span>
                  </div>

                  <p className="text-green-100 mt-3 line-clamp-3">
                    {entry.content}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {entry.activities?.map((act, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-green-800 text-green-100 text-sm rounded-full border border-green-700"
                      >
                        {act}
                      </span>
                    ))}
                    {entry.goals?.map((goal, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-green-700 text-white text-sm rounded-full border border-green-600"
                      >
                        🎯 {goal}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 mt-5 text-green-200">
                    <button
                      onClick={() => {
                        setEditingEntry(entry);
                        setShowForm(true);
                      }}
                      className="hover:text-white flex items-center gap-1"
                    >
                      <Edit3 size={16} /> {t("reflectionBox.edit")}
                    </button>
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="hover:text-red-400 flex items-center gap-1"
                    >
                      <Trash2 size={16} /> {t("reflectionBox.delete")}
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {entries.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-700 text-center mt-16 text-lg"
            >
              {t("reflectionBox.empty")}
            </motion.p>
          )}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl h-[90vh] overflow-y-auto relative p-6"
            >
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingEntry(null);
                }}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              >
                <X size={24} />
              </button>

              <CreateJournal onSave={handleSave} initialData={editingEntry} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReflectionBox;
