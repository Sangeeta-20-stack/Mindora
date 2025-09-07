// src/pages/StressCheck.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const questionsList = [
  { qKey: "q1", optionsKey: ["rarely", "sometimes", "often", "almostAlways"] },
  { qKey: "q2", optionsKey: ["veryWell", "okay", "poorly", "cantSleep"] },
  { qKey: "q3", optionsKey: ["rarely", "sometimes", "often", "almostAlways"] },
  { qKey: "q4", optionsKey: ["always", "sometimes", "rarely", "never"] },
  { qKey: "q5", optionsKey: ["high", "normal", "low", "average"] },
  { qKey: "q6", optionsKey: ["talkSomeone", "directMyself", "stayQuiet", "dontKnow"] },
  { qKey: "q7", optionsKey: ["never", "occasionally", "frequently", "almostDaily"] },
  { qKey: "q8", optionsKey: ["no", "sometimes", "often", "always"] },
  { qKey: "q9", optionsKey: ["rarely", "sometimes", "often", "always"] },
  { qKey: "q10", optionsKey: ["no", "slightChanges", "frequentChanges", "majorChanges"] },
];

const StressCheck = () => {
  const { t } = useTranslation();
  const [answers, setAnswers] = useState({});

  // Load saved answers on mount
  useEffect(() => {
    const saved = localStorage.getItem("stressAnswers");
    if (saved) setAnswers(JSON.parse(saved));
  }, []);

  // Save to localStorage whenever answers update
  useEffect(() => {
    localStorage.setItem("stressAnswers", JSON.stringify(answers));
  }, [answers]);

  const handleSelect = (qIdx, optionKey) => {
    setAnswers((prev) => ({ ...prev, [qIdx]: optionKey }));
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
          <Topbar title={t("stressCheck.title")} />
        </div>

        {/* Stress Check Section */}
        <main className="p-6 space-y-6">
          <h1 className="text-3xl font-bold text-green-900 mb-6">
            {t("stressCheck.title")}
          </h1>

          {/* Questions list */}
          <div className="space-y-6">
            {questionsList.map((item, idx) => (
              <div
                key={idx}
                className="bg-green-900 text-white rounded-2xl p-6 shadow-lg"
              >
                <h2 className="text-lg font-semibold mb-4">
                  {t(`stressCheck.questions.${item.qKey}`)}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {item.optionsKey.map((optKey, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(idx, optKey)}
                      className={`px-4 py-2 rounded-xl transition ${
                        answers[idx] === optKey
                          ? "bg-yellow-400 text-black font-semibold"
                          : "bg-green-800 hover:bg-green-700 text-white"
                      }`}
                    >
                      {t(`stressCheck.options.${optKey}`)}
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
