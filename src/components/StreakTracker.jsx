import React, { useEffect, useState } from "react";

const StreakTracker = ({ moodTracker = [] }) => {
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
      <h3 className="font-bold text-lg mb-3">🔥 Streak Tracker</h3>
      <p className="text-sm">
        <span className="font-bold">Current Streak:</span> {currentStreak} days
      </p>
      <p className="text-sm">
        <span className="font-bold">Best Streak:</span> {bestStreak} days
      </p>
      {currentStreak >= 7 && (
        <p className="mt-2 text-yellow-300 font-semibold">
          🏆 Amazing! 7+ day streak!
        </p>
      )}
    </div>
  );
};

export default StreakTracker;
