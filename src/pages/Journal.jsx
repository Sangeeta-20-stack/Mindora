// src/pages/Journal.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, List, Filter, Trash2, Edit3 } from "lucide-react";

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

  // Load entries from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("journalEntries")) || [];
    setEntries(stored);
  }, []);

  // Delete an entry
  const handleDelete = (id) => {
    const updated = entries.filter((entry) => entry.id !== id);
    setEntries(updated);
    localStorage.setItem("journalEntries", JSON.stringify(updated));
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <Topbar />

        {/* Journal Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-teal-700 flex items-center gap-2">
              📖 Journal
              <span className="text-gray-500 text-lg font-normal">
                ({entries.length} entries)
              </span>
            </h2>

            <div className="flex gap-3">
              <button className="px-4 py-2 border rounded-lg flex items-center gap-2 text-gray-600 hover:bg-gray-100 transition">
                <List size={18} /> List View
              </button>
              <button className="px-4 py-2 border rounded-lg flex items-center gap-2 text-gray-600 hover:bg-gray-100 transition">
                <Filter size={18} /> Filter
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/create-journal")}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg flex items-center gap-2 shadow hover:bg-teal-700 transition"
              >
                <Plus size={18} /> New Entry
              </motion.button>
            </div>
          </div>

          {/* Journal Entries */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence>
              {entries.map((entry, index) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-teal-700">
                      {entry.mood || "Untitled"}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {entry.createdAt}
                    </span>
                  </div>

                  <p className="text-gray-700 mt-3 line-clamp-3">
                    {entry.journalEntry}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {entry.activities?.map((act, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full border"
                      >
                        {act}
                      </span>
                    ))}
                    {entry.goals?.map((goal, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full border"
                      >
                        🎯 {goal}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 mt-5 text-gray-500">
                    <button className="hover:text-teal-600 flex items-center gap-1">
                      <Edit3 size={16} /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="hover:text-red-600 flex items-center gap-1"
                    >
                      <Trash2 size={16} /> Delete
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
              className="text-gray-500 text-center mt-16 text-lg"
            >
              No journal entries yet. Start writing your first entry! ✍️
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Journal;
