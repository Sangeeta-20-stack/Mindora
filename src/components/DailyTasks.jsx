// src/components/DailyTasks.jsx
import React, { useState, useEffect } from "react";
import { Book, Dumbbell, Users, PenTool, Sun, Smile, Heart } from "lucide-react";
import { useTranslation } from "react-i18next"; // ✅ import translation

// Define master task list (keys instead of raw labels)
const taskList = [
  { key: "readBooks", icon: Book },
  { key: "workout", icon: Dumbbell },
  { key: "familyTime", icon: Users },
  { key: "journalWrite", icon: PenTool },
  { key: "selfDiscipline", icon: Sun },
  { key: "moodTracker", icon: Smile },
  { key: "friendsTime", icon: Heart },
];

const DailyTasks = ({ onCompletionChange }) => {
  const { t } = useTranslation(); // ✅ translation hook

  const [completedTasks, setCompletedTasks] = useState(() => {
    const saved = localStorage.getItem("completedTasks");
    return saved ? JSON.parse(saved) : taskList.map(() => false);
  });

  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));

    const completionRate =
      completedTasks.filter((done) => done).length / completedTasks.length;
    onCompletionChange(completionRate);
  }, [completedTasks]);

  const toggleTask = (i) => {
    setCompletedTasks((prev) =>
      prev.map((done, idx) => (idx === i ? !done : done))
    );
  };

  const completed = completedTasks.filter((d) => d).length;
  const total = taskList.length;

  return (
    <div className="bg-green-900 rounded-2xl shadow-lg p-6 text-white">
      <h3 className="font-bold text-lg mb-3">📋 {t("dailyTasks.title")}</h3>
      <p className="mb-3 text-sm">
        {completed}/{total} {t("dailyTasks.completed")}
      </p>
      <ul className="space-y-2">
        {taskList.map((task, i) => {
          const Icon = task.icon;
          const done = completedTasks[i];
          return (
            <li
              key={i}
              className="flex items-center cursor-pointer"
              onClick={() => toggleTask(i)}
            >
              <Icon
                className={`w-5 h-5 mr-2 ${
                  done ? "text-yellow-300" : "text-white"
                }`}
              />
              <span className={done ? "line-through text-gray-300" : ""}>
                {t(`tasks.${task.key}`)} {/* ✅ translated task label */}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DailyTasks;
