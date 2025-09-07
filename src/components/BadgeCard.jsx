// src/components/BadgeCard.jsx
import React from "react";
import { useTranslation } from "react-i18next"; 


const BadgeCard = ({ badge }) => {
  const { t } = useTranslation();

  return (
    <div
      className="
        bg-green-900 text-white
        dark:bg-gray-800 dark:text-gray-100
        rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center
        transition-colors duration-300
      "
    >
      <div className="text-5xl">{badge.emoji}</div>
      <h3 className="mt-3 font-bold text-lg">{t(badge.title)}</h3>
      <p className="mt-1 text-sm">{t(badge.desc)}</p>
    </div>
  );
};

export default BadgeCard;
