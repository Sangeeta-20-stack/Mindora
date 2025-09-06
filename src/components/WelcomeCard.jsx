import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import welcomeImg from "../assets/welcome.png";

const quotes = [
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
  "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
];

const WelcomeCard = () => {
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      setUserName(savedUser);
    }
  }, []);

  const today = new Date();
  const formattedDate = today.toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-green-900 text-white rounded-3xl p-8 flex justify-between items-center shadow-xl"
    >
      {/* Left Section */}
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold">Welcome, {userName} 👋</h2>
        <p className="mt-1 text-sm opacity-80">{formattedDate}</p>
        <blockquote className="mt-4 italic text-base text-gray-200">
          “{randomQuote}”
        </blockquote>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#f7f6d5] text-green-900 px-6 py-2.5 rounded-full font-medium shadow hover:shadow-md transition"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#f7f6d5] text-[#f7f6d5] px-6 py-2.5 rounded-full font-medium shadow hover:shadow-md transition"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Right Illustration in Arch Frame */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="w-56 h-56 bg-[#f7f6d5] rounded-t-full rounded-b-3xl flex items-center justify-center drop-shadow-lg p-4"
      >
        <img src={welcomeImg} alt="Welcome" className="w-full h-full object-contain" />
      </motion.div>
    </motion.div>
  );
};

export default WelcomeCard;
