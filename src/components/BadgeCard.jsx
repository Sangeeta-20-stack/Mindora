// src/components/BadgeCard.jsx
import React from "react";
import { useTranslation } from "react-i18next"; // ✅ import i18n hook

const BadgeCard = ({ badge }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-green-900 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-white">
      <div className="text-5xl">{badge.emoji}</div>
      <h3 className="mt-3 font-bold text-lg">
        {t(badge.title)} {/* ✅ translate title */}
      </h3>
      <p className="mt-1 text-sm">
        {t(badge.desc)} {/* ✅ translate description */}
      </p>
    </div>
  );
};

export default BadgeCard;
