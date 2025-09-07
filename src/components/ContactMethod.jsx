// src/components/ContactMethod.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const ContactMethod = ({ title, description, link }) => {
  const { t } = useTranslation();

  return (
    <div
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md 
                 hover:shadow-xl transition-all duration-300 
                 transform hover:-translate-y-2 hover:scale-105"
    >
      {/* Title */}
      <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-2">
        {t(`contact.${title}`)}
      </h3>

      {/* Description / Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-800 dark:text-teal-300 font-medium 
                   hover:text-teal-600 dark:hover:text-teal-400 
                   hover:underline transition-colors duration-300"
      >
        {t(`contact.${description}`)}
      </a>
    </div>
  );
};

export default ContactMethod;
