// src/components/QuickStatsCard.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const QuickStatsCard = ({ activeStudents, anonymousChats, appointmentsPending }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-green-900 dark:bg-gray-800 text-white dark:text-green-100 p-5 rounded-2xl w-full shadow-md">
      <h3 className="font-bold text-lg mb-3">{t("quickStats.title")}</h3>
      <p>
        {t("quickStats.activeStudents")}: <b>{activeStudents}</b>
      </p>
      <p>
        {t("quickStats.anonymousChats")}: <b>{anonymousChats}</b>
      </p>
      <p>
        {t("quickStats.appointmentsPending")}: <b>{appointmentsPending}</b>
      </p>
    </div>
  );
};

export default QuickStatsCard;
