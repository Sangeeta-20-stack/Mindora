// src/components/StreakTracker.jsx
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // ✅ import translator

const StreakTracker = ({ moodTracker = [] }) => {
  const { t } = useTranslation(); // ✅ hook
  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  // Load best streak from storage
  useEffect(() => {
    const savedBest = localStorage.getItem("bestStreak");
    if (savedBest) setBestStreak(Number(savedBest));
  }, []);

  // Calculate streaks whenever moodTracker changes
  useEffect(() => {
    if (!Array.isArray(moodTracker)) return; // ✅ prevent crashes

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
    <div className="bg-green-900 rounded-2xl shadow-lg p-6 text-white">
      <h3 className="font-bold text-lg mb-3">🔥 {t("streak.title")}</h3>
      <p className="text-sm">
        <span className="font-bold">{t("streak.current")}: </span>
        {currentStreak} {t("streak.days")}
      </p>
      <p className="text-sm">
        <span className="font-bold">{t("streak.best")}: </span>
        {bestStreak} {t("streak.days")}
      </p>
      {currentStreak >= 7 && (
        <p className="mt-2 text-yellow-300 font-semibold">
          🏆 {t("streak.congrats")}
        </p>
      )}
    </div>
  );
};

export default StreakTracker;
