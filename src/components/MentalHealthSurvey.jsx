import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    question: "How is your mood today?",
    options: ["😊 Happy", "😐 Neutral", "😔 Sad", "😡 Angry", "😰 Anxious"],
    color: "teal",
  },
  {
    question: "How often do you feel stressed lately?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    color: "rose",
  },
  {
    question: "Are you getting enough sleep?",
    options: ["Always", "Mostly", "Sometimes", "Rarely", "Never"],
    color: "purple",
  },
  {
    question: "Do you feel supported by friends or family?",
    options: ["Yes, always", "Sometimes", "Rarely", "Never"],
    color: "indigo",
  },
];

const QuestionCard = ({ question, options, onSelect, color }) => {
  return (
    <motion.div
      key={question}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className={`bg-gradient-to-r from-${color}-50 to-white p-6 rounded-2xl shadow-md border border-${color}-100`}
    >
      <h3 className={`text-${color}-700 font-semibold text-xl mb-4`}>{question}</h3>
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <motion.button
            key={option}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`px-4 py-2 rounded-xl bg-${color}-100 text-${color}-800 shadow hover:bg-${color}-200`}
            onClick={() => onSelect(option)}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

const MentalHealthSurvey = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleSelect = (option) => {
    const currentQuestion = questions[currentIndex].question;
    setAnswers({ ...answers, [currentQuestion]: option });

    // Move to next question
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log("All Answers:", { ...answers, [currentQuestion]: option });
      alert("Thank you for submitting your responses!");
    }
  };

  return (
    <div className="flex-1 max-w-lg mx-auto mt-6">
      <AnimatePresence exitBeforeEnter>
        <QuestionCard
          key={questions[currentIndex].question}
          question={questions[currentIndex].question}
          options={questions[currentIndex].options}
          color={questions[currentIndex].color}
          onSelect={handleSelect}
        />
      </AnimatePresence>
    </div>
  );
};

export default MentalHealthSurvey;
