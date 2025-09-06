import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaSmile,
  FaSadTear,
  FaMeh,
  FaAngry,
  FaHeart,
  FaFrown,
} from "react-icons/fa";

const MoodTracker = ({ moodTracker, setMoodTracker }) => {
  const moods = [
    { id: "happy", icon: <FaSmile />, label: "Happy" },
    { id: "sad", icon: <FaSadTear />, label: "Sad" },
    { id: "neutral", icon: <FaMeh />, label: "Neutral" },
    { id: "angry", icon: <FaAngry />, label: "Angry" },
    { id: "love", icon: <FaHeart />, label: "Love" },
    { id: "upset", icon: <FaFrown />, label: "Upset" },
  ];

  const [selectedMood, setSelectedMood] = useState(() => {
    return localStorage.getItem("selectedMood") || null;
  });

  useEffect(() => {
    if (selectedMood) {
      localStorage.setItem("selectedMood", selectedMood);
    }
  }, [selectedMood]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-green-900 p-6 rounded-xl shadow-md h-full flex flex-col"
    >
      {/* Heading */}
      <h1 className="text-lg font-bold text-white mb-1">Mood-o-Meter 💭</h1>
      <h2 className="text-gray-200 mb-4 text-sm">Describe your day:</h2>

      {/* Mood Icons */}
      <div className="flex justify-between md:justify-start md:gap-4 gap-3 flex-wrap">
        {moods.map((m, i) => (
          <motion.div
            key={m.id}
            onClick={() => setSelectedMood(m.id)}
            whileHover={{
              scale: 1.1,
              y: -4,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.9 }}
            className={`
              w-12 h-12 flex items-center justify-center
              text-xl rounded-full cursor-pointer border-2 transition-all duration-300
              ${
                selectedMood === m.id
                  ? "bg-yellow-300 border-yellow-500 text-green-900 shadow-lg"
                  : "bg-[#f7f6d5] border-green-900 text-green-900"
              }
            `}
            title={m.label}
          >
            {m.icon}
          </motion.div>
        ))}
      </div>

      {/* Spacer to keep height consistent */}
      <div className="flex-grow" />

      {/* Selected mood text */}
      {selectedMood && (
        <p className="text-gray-100 text-sm mt-2">
          You’re feeling:{" "}
          <span className="font-semibold capitalize">{selectedMood}</span>
        </p>
      )}
    </motion.div>
  );
};

export default MoodTracker;
