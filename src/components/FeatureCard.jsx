// src/components/FeatureCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // ✅ import i18n

const FeatureCard = ({ image, title, delay = 0 }) => {
  const { t } = useTranslation(); // ✅ translation hook

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="
        w-32 sm:w-36 md:w-40 h-40 flex flex-col items-center justify-center
        rounded-xl shadow-md 
        bg-white text-green-900 
        dark:bg-gray-800 dark:text-gray-100
        hover:bg-green-900 hover:text-white 
        dark:hover:bg-green-600 dark:hover:text-white
        transition-all duration-300 ease-in-out cursor-pointer
      "
    >
      {/* Icon/Image */}
      <div className="w-16 h-16 mb-3">
        <img
          src={image}
          alt={t(title)} // ✅ localized alt text
          className="w-full h-full object-contain rounded-md"
        />
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-center">{t(title)}</h3> {/* ✅ localized title */}
    </motion.div>
  );
};

export default FeatureCard;
