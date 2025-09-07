// src/components/WelcomeCard.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import welcomeImg from "../assets/welcome.jpg";

const quotes = [
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
  "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
];

const WelcomeCard = () => {
  const { t } = useTranslation();
  const [userName, setUserName] = useState("User");
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      setUserName(savedUser);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const today = new Date();
  const formattedDate = today.toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="
        rounded-3xl p-8 flex justify-between items-center shadow-xl
        bg-green-900 text-white
        dark:bg-gray-800 dark:text-gray-100
      "
    >
      {/* Left Section */}
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-lg"
      >
        <h2 className="text-3xl font-bold">
          {t("welcome", { name: userName })}
        </h2>

        <p className="mt-2 text-xl font-semibold text-[#f7f6d5] dark:text-green-300">
          {formattedDate}
        </p>

        {/* Dynamic Quotes */}
        <div className="mt-6 min-h-[70px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={quoteIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="
                italic text-xl border-l-4 pl-4
                text-gray-200 border-[#f7f6d5]
                dark:text-gray-300 dark:border-green-300
              "
            >
              “{quotes[quoteIndex]}”
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Right Illustration */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="w-56 h-64 rounded-t-full rounded-b-2xl overflow-hidden drop-shadow-lg"
      >
        <img
          src={welcomeImg}
          alt="Welcome"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default WelcomeCard;
