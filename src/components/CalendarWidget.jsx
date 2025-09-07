// src/components/CalendarWidget.jsx
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next"; 

const CalendarWidget = ({ currentDate, handlePrevMonth, handleNextMonth, handleToday }) => {
  const { t } = useTranslation(); 

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonthDays = Array.from({ length: firstDay }, (_, i) =>
    new Date(year, month, -i).getDate()
  ).reverse();
  const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const nextMonthDays = Array.from(
    { length: (7 - ((firstDay + daysInMonth) % 7)) % 7 },
    (_, i) => i + 1
  );

  return (
    <div
      className="
        bg-green-900 text-white rounded-3xl shadow-xl p-6
        dark:bg-gray-800 dark:text-gray-100
        transition-colors duration-300
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handlePrevMonth}
          className="
            p-2 rounded-full bg-gray-100 hover:bg-green-100 shadow-sm
            dark:bg-gray-700 dark:hover:bg-gray-600
          "
        >
          <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        </button>

        <h3 className="text-lg font-semibold">
          {t(`calendar.months.${month}`)} {year} 
        </h3>

        <button
          onClick={handleNextMonth}
          className="
            p-2 rounded-full bg-gray-100 hover:bg-green-100 shadow-sm
            dark:bg-gray-700 dark:hover:bg-gray-600
          "
        >
          <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        </button>

        <button
          onClick={handleToday}
          className="
            ml-2 px-4 py-2 bg-yellow-400 text-green-900 font-bold rounded-xl shadow
            hover:bg-yellow-300 transition
          "
        >
          {t("calendar.today")}
        </button>
      </div>

      {/* Days of week */}
      <div className="grid grid-cols-7 text-center font-semibold mb-4">
        {t("calendar.days", { returnObjects: true }).map((day, i) => (
          <div key={i} className="tracking-wide">
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-2">
        {prevMonthDays.map((day, i) => (
          <div
            key={`prev-${i}`}
            className="
              p-4 rounded-xl text-gray-400 text-center
              bg-green-800 dark:bg-gray-700
            "
          >
            {day}
          </div>
        ))}

        {monthDays.map((day) => {
          const isToday =
            day === new Date().getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear();

          return (
            <div
              key={day}
              className={`p-4 rounded-2xl text-center cursor-pointer transition ${
                isToday
                  ? "bg-yellow-400 text-green-900 font-bold shadow-lg"
                  : "bg-green-800 hover:bg-green-700 dark:bg-gray-700 dark:hover:bg-gray-600"
              }`}
            >
              {day}
            </div>
          );
        })}

        {nextMonthDays.map((day, i) => (
          <div
            key={`next-${i}`}
            className="
              p-4 rounded-xl text-gray-400 text-center
              bg-green-800 dark:bg-gray-700
            "
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarWidget;
