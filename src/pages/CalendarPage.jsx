import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // 👈 Modern icons
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonthDays = Array.from(
    { length: firstDay },
    (_, i) => new Date(year, month, -i).getDate()
  ).reverse();

  const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const nextMonthDays = Array.from(
    { length: (7 - ((firstDay + daysInMonth) % 7)) % 7 },
    (_, i) => i + 1
  );

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Topbar title="Calendar" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex-1 w-full p-8"
        >
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-teal-700">Calendar</h2>
              <p className="text-gray-600">
                Track your journaling journey and view entries by date
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrevMonth}
                className="p-2 rounded-full bg-gray-100 hover:bg-teal-100 shadow-sm transition"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>

              <h3 className="text-lg font-semibold text-gray-800">
                {currentDate.toLocaleString("default", { month: "long" })}{" "}
                {year}
              </h3>

              <button
                onClick={handleNextMonth}
                className="p-2 rounded-full bg-gray-100 hover:bg-teal-100 shadow-sm transition"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>

              <button
                onClick={handleToday}
                className="ml-3 px-4 py-2 bg-teal-500 text-white rounded-xl shadow hover:bg-teal-600 transition"
              >
                Today
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <motion.div
            className="bg-white rounded-3xl shadow-xl p-6"
            whileHover={{ scale: 1.005 }}
          >
            {/* Days of week */}
            <div className="grid grid-cols-7 text-center font-semibold text-gray-600 mb-4">
              {daysOfWeek.map((day) => (
                <div key={day} className="tracking-wide">
                  {day}
                </div>
              ))}
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-2">
              {/* Previous month */}
              {prevMonthDays.map((day, i) => (
                <div
                  key={`prev-${i}`}
                  className="p-4 rounded-xl text-gray-400 text-center bg-gray-50"
                >
                  {day}
                </div>
              ))}

              {/* Current month */}
              {monthDays.map((day) => {
                const isToday =
                  day === new Date().getDate() &&
                  month === new Date().getMonth() &&
                  year === new Date().getFullYear();

                return (
                  <motion.div
                    key={day}
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 rounded-2xl text-center cursor-pointer transition 
                      ${
                        isToday
                          ? "bg-teal-500 text-white font-bold shadow-lg"
                          : "bg-gray-50 hover:bg-teal-50 hover:shadow"
                      }`}
                  >
                    {day}
                  </motion.div>
                );
              })}

              {/* Next month */}
              {nextMonthDays.map((day, i) => (
                <div
                  key={`next-${i}`}
                  className="p-4 rounded-xl text-gray-400 text-center bg-gray-50"
                >
                  {day}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CalendarPage;
