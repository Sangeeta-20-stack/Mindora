// src/components/StreakTracker.jsx
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const StreakTracker = ({ moodTracker = [] }) => {
  const { t } = useTranslation();
  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  // Load best streak from storage
  useEffect(() => {
    const savedBest = localStorage.getItem("bestStreak");
    if (savedBest) setBestStreak(Number(savedBest));
  }, []);

  // Calculate streaks whenever moodTracker changes
  useEffect(() => {
    if (!Array.isArray(moodTracker)) return;

    let streak = 0;
    for (let i = moodTracker.length - 1; i >= 0; i--) {
      if (moodTracker[i] !== "none") {
        streak++;
      } else {
        break;
      }
    }

    setCurrentStreak(streak);

    if (streak > bestStreak) {
      setBestStreak(streak);
      localStorage.setItem("bestStreak", streak);
    }
  }, [moodTracker, bestStreak]);

  return (
    <div
      className="
        rounded-2xl shadow-lg p-6
        bg-green-900 text-white
        dark:bg-gray-800 dark:text-gray-100
        transition-colors duration-300
      "
    >
      <h3 className="font-bold text-lg mb-3 text-white dark:text-green-300">
        🔥 {t("streak.title")}
      </h3>

      <p className="text-sm text-gray-100 dark:text-gray-300">
        <span className="font-bold">{t("streak.current")}: </span>
        {currentStreak} {t("streak.days")}
      </p>

      <p className="text-sm text-gray-100 dark:text-gray-300">
        <span className="font-bold">{t("streak.best")}: </span>
        {bestStreak} {t("streak.days")}
      </p>

      {currentStreak >= 7 && (
        <p className="mt-2 text-yellow-300 dark:text-yellow-400 font-semibold">
          🏆 {t("streak.congrats")}
        </p>
      )}
    </div>
  );
};

export default StreakTracker;
