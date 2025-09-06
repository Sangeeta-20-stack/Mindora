import React, { useState, useEffect } from "react";
import { Book, Dumbbell, Users, PenTool, Sun, Smile, Heart } from "lucide-react";

// Define master task list (icons fixed here)
const taskList = [
  { label: "Read Books", icon: Book },
  { label: "Workout", icon: Dumbbell },
  { label: "Family Time", icon: Users },
  { label: "Journal Write", icon: PenTool },
  { label: "Self-discipline", icon: Sun },
  { label: "Mood Tracker", icon: Smile },
  { label: "Friends Time", icon: Heart },
];

const DailyTasks = ({ onCompletionChange }) => {
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
      <h3 className="font-bold text-lg mb-3">📋 Daily Tasks</h3>
      <p className="mb-3 text-sm">
        {completed}/{total} completed
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
                {task.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DailyTasks;
