import React from "react";
import { motion } from "framer-motion";

const MoodTracker = () => {
  const moods = ["😊", "😢", "😐", "😡", "😍", "😒"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-teal-50 to-white p-6 rounded-2xl shadow-md mt-6 border border-teal-100"
    >
      {/* Heading */}
      <h2 className="text-xl font-semibold mb-2 text-teal-700">
        State of Mind 💭
      </h2>
      <p className="text-gray-600 mb-6">Tap an emoji that matches your day</p>

      {/* Emojis */}
      <div className="flex justify-between md:justify-start md:gap-8 gap-4 text-4xl flex-wrap">
        {moods.map((emoji, i) => (
          <motion.span
            key={i}
            className="p-3 rounded-full transition-all duration-300 text-gray-700 bg-teal-50 shadow"
          >
            {emoji}
          </motion.span>
        ))}
      </div>

    </motion.div>
  );
};

export default MoodTracker;
