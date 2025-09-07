// src/components/MentalHealthSurvey.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smile, Meh, Frown, Angry, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const QuestionCard = ({ question, options, onSelect }) => {
  return (
    <motion.div
      key={question}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="bg-[#f7f6d5] dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-green-900 dark:border-green-700 transition-colors"
    >
      <h3 className="text-green-900 dark:text-green-100 font-semibold text-xl mb-4 transition-colors">
        {question}
      </h3>
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <motion.button
            key={option.label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-green-900 dark:border-green-700 text-green-900 dark:text-green-100 font-medium hover:text-white hover:bg-green-900 dark:hover:bg-green-700 transition-colors"
            onClick={() => onSelect(option.label)}
          >
            {option.icon}
            <span>{option.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

const MentalHealthSurvey = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      question: t("survey.q1.question"),
      options: [
        { label: t("survey.q1.options.happy"), icon: <Smile /> },
        { label: t("survey.q1.options.neutral"), icon: <Meh /> },
        { label: t("survey.q1.options.sad"), icon: <Frown /> },
        { label: t("survey.q1.options.angry"), icon: <Angry /> },
        { label: t("survey.q1.options.anxious"), icon: <AlertCircle /> },
      ],
    },
    {
      question: t("survey.q2.question"),
      options: [
        { label: t("survey.q2.options.never"), icon: <Smile /> },
        { label: t("survey.q2.options.rarely"), icon: <Meh /> },
        { label: t("survey.q2.options.sometimes"), icon: <Frown /> },
        { label: t("survey.q2.options.often"), icon: <Angry /> },
        { label: t("survey.q2.options.always"), icon: <AlertCircle /> },
      ],
    },
    {
      question: t("survey.q3.question"),
      options: [
        { label: t("survey.q3.options.always"), icon: <Smile /> },
        { label: t("survey.q3.options.mostly"), icon: <Meh /> },
        { label: t("survey.q3.options.sometimes"), icon: <Frown /> },
        { label: t("survey.q3.options.rarely"), icon: <Angry /> },
        { label: t("survey.q3.options.never"), icon: <AlertCircle /> },
      ],
    },
    {
      question: t("survey.q4.question"),
      options: [
        { label: t("survey.q4.options.always"), icon: <Smile /> },
        { label: t("survey.q4.options.sometimes"), icon: <Meh /> },
        { label: t("survey.q4.options.rarely"), icon: <Frown /> },
        { label: t("survey.q4.options.never"), icon: <Angry /> },
      ],
    },
  ];

  const handleSelect = (optionLabel) => {
    const currentQuestion = questions[currentIndex].question;
    setAnswers({ ...answers, [currentQuestion]: optionLabel });

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log("All Answers:", { ...answers, [currentQuestion]: optionLabel });
      alert(t("survey.thank_you"));
    }
  };

  return (
    <div className="flex-1 max-w-lg mx-auto mt-6">
      <AnimatePresence mode="wait">
        <QuestionCard
          key={questions[currentIndex].question}
          question={questions[currentIndex].question}
          options={questions[currentIndex].options}
          onSelect={handleSelect}
        />
      </AnimatePresence>
    </div>
  );
};

export default MentalHealthSurvey;
