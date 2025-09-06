// src/pages/StressCheck.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const questions = [
  { q: "How often have you felt overwhelmed this week?", options: ["Rarely", "Sometimes", "Often", "Almost always"] },
  { q: "How well are you sleeping these days?", options: ["Very well", "Okay", "Poorly", "Can't sleep"] },
  { q: "How often do you feel anxious about the future?", options: ["Rarely", "Sometimes", "Often", "Almost always"] },
  { q: "Do you find time for yourself and hobbies?", options: ["Always", "Sometimes", "Rarely", "Never"] },
  { q: "How is your energy level today?", options: ["High", "Normal", "Low", "Average"] },
  { q: "When facing stress, what do you usually do?", options: ["Talk to someone", "Direct myself", "Stay quiet", "Don’t know what to do"] },
  { q: "How often do you experience headaches or muscle tension?", options: ["Never", "Occasionally", "Frequently", "Almost daily"] },
  { q: "Do you struggle to focus or concentrate?", options: ["No", "Sometimes", "Often", "Always"] },
  { q: "How often do you feel fatigued even after resting?", options: ["Rarely", "Sometimes", "Often", "Always"] },
  { q: "Do you notice changes in your eating habits under stress?", options: ["No", "Slight changes", "Frequent changes", "Major changes"] },
];

const StressCheck = () => {
  const [answers, setAnswers] = useState({});

  // Load saved answers on mount
  useEffect(() => {
    const saved = localStorage.getItem("stressAnswers");
    if (saved) {
      setAnswers(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever answers update
  useEffect(() => {
    localStorage.setItem("stressAnswers", JSON.stringify(answers));
  }, [answers]);

  const handleSelect = (qIdx, option) => {
    setAnswers((prev) => ({
      ...prev,
      [qIdx]: option,
    }));
  };

  return (
    <div className="flex min-h-screen bg-[#fdf6e3]">
      {/* Sidebar */}
      <aside className="w-64 bg-green-900 flex-shrink-0 h-screen fixed">
        <Sidebar />
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col ml-64 overflow-y-auto h-screen">
        {/* Topbar */}
        <div className="sticky top-0 z-10">
          <Topbar />
        </div>

        {/* Stress Check Section */}
        <main className="p-6 space-y-6">
          <h1 className="text-3xl font-bold text-green-900 mb-6">
            Stress Level Check
          </h1>

          {/* Questions list */}
          <div className="space-y-6">
            {questions.map((item, idx) => (
              <div
                key={idx}
                className="bg-green-900 text-white rounded-2xl p-6 shadow-lg"
              >
                <h2 className="text-lg font-semibold mb-4">{item.q}</h2>
                <div className="flex flex-wrap gap-3">
                  {item.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(idx, opt)}
                      className={`px-4 py-2 rounded-xl transition ${
                        answers[idx] === opt
                          ? "bg-yellow-400 text-black font-semibold"
                          : "bg-green-800 hover:bg-green-700 text-white"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default StressCheck;
