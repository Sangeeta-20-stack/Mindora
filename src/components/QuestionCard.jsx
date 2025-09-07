// src/components/QuestionCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // ✅ import hook

const QuestionCard = ({ question, options, value, onChange }) => {
  const { t } = useTranslation(); // ✅ translation hook

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      className="bg-white shadow-lg rounded-2xl p-6 mb-6 border-l-8 border-teal-500"
    >
      {/* Translate question */}
      <h3 className="text-gray-800 font-semibold mb-4">{t(question)}</h3>

      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-3 cursor-pointer text-gray-700 hover:text-teal-700 transition-colors"
          >
            <input
              type="radio"
              name={question}
              value={option}
              checked={value === option}
              onChange={onChange}
              className="cursor-pointer accent-teal-600"
            />
            {/* Translate option */}
            {t(option)}
          </label>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionCard;
