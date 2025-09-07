// src/components/MoodTracker.jsx
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
import { useTranslation } from "react-i18next"; // ✅ import i18n

const MoodTracker = ({ moodTracker, setMoodTracker }) => {
  const { t } = useTranslation(); // ✅ translation hook

  const moods = [
    { id: "happy", icon: <FaSmile />, label: t("moods.happy") },
    { id: "sad", icon: <FaSadTear />, label: t("moods.sad") },
    { id: "neutral", icon: <FaMeh />, label: t("moods.neutral") },
    { id: "angry", icon: <FaAngry />, label: t("moods.angry") },
    { id: "love", icon: <FaHeart />, label: t("moods.love") },
    { id: "upset", icon: <FaFrown />, label: t("moods.upset") },
  ];

  // Load last selected mood (today's mood if already chosen)
  const [selectedMood, setSelectedMood] = useState(() => {
    const saved = localStorage.getItem("selectedMood");
    return saved || null;
  });

  // Sync localStorage whenever mood changes
  useEffect(() => {
    if (selectedMood) {
      localStorage.setItem("selectedMood", selectedMood);

      // Update today's mood in the moodTracker array
      const updated = [...moodTracker];
      updated[updated.length - 1] = selectedMood; // mark today
      setMoodTracker(updated);
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
      <h1 className="text-lg font-bold text-white mb-1">
        {t("moodTracker.title")}
      </h1>
      <h2 className="text-gray-200 mb-4 text-sm">
        {t("moodTracker.subtitle")}
      </h2>

      {/* Mood Icons */}
      <div className="flex justify-between md:justify-start md:gap-4 gap-3 flex-wrap">
        {moods.map((m) => (
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

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Selected mood text */}
      {selectedMood && (
        <p className="text-gray-100 text-sm mt-2">
          {t("moodTracker.you_feel")}{" "}
          <span className="font-semibold capitalize">
            {t(`moods.${selectedMood}`)}
          </span>
        </p>
      )}
    </motion.div>
  );
};

export default MoodTracker;
