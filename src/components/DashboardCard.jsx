// src/components/DashboardCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // ✅ import translation

const DashboardCard = ({ title, image }) => {
  const { t } = useTranslation(); // ✅ translation hook

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 70, damping: 15 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 25px rgba(13,148,136,0.3)",
        backgroundColor: "#f0fdfa",
      }}
      whileTap={{ scale: 0.95 }}
      className="bg-white shadow rounded-2xl p-6 text-center cursor-pointer transition-colors flex flex-col items-center justify-center min-h-[220px]"
    >
      <motion.img
        src={image}
        alt={t(title)} // ✅ localized alt text
        className="w-20 h-20 mb-4"
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      />
      <motion.h3
        className="font-semibold text-gray-800 text-lg"
        whileHover={{ color: "#0d9488" }}
      >
        {t(title)} {/* ✅ localized title */}
      </motion.h3>
    </motion.div>
  );
};

export default DashboardCard;
