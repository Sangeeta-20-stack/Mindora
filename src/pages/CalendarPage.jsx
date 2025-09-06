// src/pages/CalendarPage.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import MoodTracker from "../components/MoodTracker";
import StreakTracker from "../components/StreakTracker";
import DailyTasks from "../components/DailyTasks";
import QuotesCard from "../components/QuotesCard";
import BadgeCard from "../components/BadgeCard";
import CalendarWidget from "../components/CalendarWidget";

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [moodTracker, setMoodTracker] = useState(
    () => JSON.parse(localStorage.getItem("moodTracker")) || Array(35).fill("none")
  );
  const [completionRate, setCompletionRate] = useState(0);
  const [badge, setBadge] = useState({
    emoji: "❓",
    title: "Keep Going",
    desc: "Stay consistent to earn a badge!",
  });

  useEffect(() => {
    localStorage.setItem("moodTracker", JSON.stringify(moodTracker));
  }, [moodTracker]);

  useEffect(() => {
    const moodCount = moodTracker.reduce(
      (acc, mood) => {
        acc[mood] = (acc[mood] || 0) + 1;
        return acc;
      },
      { none: 0, happy: 0, neutral: 0, sad: 0 }
    );

    const bestStreak = Number(localStorage.getItem("bestStreak")) || 0;

    if (completionRate >= 0.8) {
      setBadge({
        emoji: "🏅",
        title: "Consistency Champ",
        desc: "You’ve completed most of your tasks!",
      });
    } else if (
      moodCount.happy > moodCount.neutral &&
      moodCount.happy > moodCount.sad
    ) {
      setBadge({
        emoji: "🌟",
        title: "Positivity Star",
        desc: "Your mood has been mostly happy!",
      });
    } else if (bestStreak >= 7) {
      setBadge({
        emoji: "🔥",
        title: "Streak Master",
        desc: "7+ day mood streak achieved!",
      });
    } else if (completionRate >= 0.5 && moodCount.happy > moodCount.sad) {
      setBadge({
        emoji: "💪",
        title: "Wellness Warrior",
        desc: "Balanced progress across tasks & mood!",
      });
    } else {
      setBadge({
        emoji: "❓",
        title: "Keep Going",
        desc: "Stay consistent to earn a badge!",
      });
    }
  }, [completionRate, moodTracker]);

  return (
    <div className="flex min-h-screen bg-[#f7f6d5]">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden ml-64">
        <Topbar title="Dashboard" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex-1 w-full px-6 md:px-12 py-8 overflow-y-auto"
        >
          <div className="max-w-7xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Wellness Dashboard
            </h2>

            {/* Uniform card grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {/* ✅ Fixed: pass props */}
              <MoodTracker moodTracker={moodTracker} setMoodTracker={setMoodTracker} />
              <StreakTracker moodTracker={moodTracker} />
              <QuotesCard />
              <BadgeCard badge={badge} />
              <DailyTasks onCompletionChange={setCompletionRate} />
              <CalendarWidget
                currentDate={currentDate}
                handlePrevMonth={() =>
                  setCurrentDate(
                    new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
                  )
                }
                handleNextMonth={() =>
                  setCurrentDate(
                    new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
                  )
                }
                handleToday={() => setCurrentDate(new Date())}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CalendarPage;
