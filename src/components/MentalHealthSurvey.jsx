import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smile,
  Meh,
  Frown,
  Angry,
  AlertCircle,
} from "lucide-react"; // mood icons

const questions = [
  {
    question: "How is your mood today?",
    options: [
      { label: "Happy", icon: <Smile /> },
      { label: "Neutral", icon: <Meh /> },
      { label: "Sad", icon: <Frown /> },
      { label: "Angry", icon: <Angry /> },
      { label: "Anxious", icon: <AlertCircle /> },
    ],
    color: "teal",
  },
  {
    question: "How often do you feel stressed lately?",
    options: [
      { label: "Never", icon: <Smile /> },
      { label: "Rarely", icon: <Meh /> },
      { label: "Sometimes", icon: <Frown /> },
      { label: "Often", icon: <Angry /> },
      { label: "Always", icon: <AlertCircle /> },
    ],
    color: "rose",
  },
  {
    question: "Are you getting enough sleep?",
    options: [
      { label: "Always", icon: <Smile /> },
      { label: "Mostly", icon: <Meh /> },
      { label: "Sometimes", icon: <Frown /> },
      { label: "Rarely", icon: <Angry /> },
      { label: "Never", icon: <AlertCircle /> },
    ],
    color: "purple",
  },
  {
    question: "Do you feel supported by friends or family?",
    options: [
      { label: "Yes, always", icon: <Smile /> },
      { label: "Sometimes", icon: <Meh /> },
      { label: "Rarely", icon: <Frown /> },
      { label: "Never", icon: <Angry /> },
    ],
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
      className="bg-[#f7f6d5] p-6 rounded-2xl shadow-md border border-green-900"
    >
      <h3 className="text-green-900 font-semibold text-xl mb-4">{question}</h3>
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <motion.button
            key={option.label}
            whileHover={{ scale: 1.05, backgroundColor: "#e5e4c7" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-green-900 text-green-900 font-medium hover:text-white hover:bg-green-900 transition"
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleSelect = (optionLabel) => {
    const currentQuestion = questions[currentIndex].question;
    setAnswers({ ...answers, [currentQuestion]: optionLabel });

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log("All Answers:", { ...answers, [currentQuestion]: optionLabel });
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
