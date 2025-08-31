import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  delay = 0, 
  bgColor = "bg-teal-100", 
  textColor = "text-teal-600" 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.2 }}
      className={`
        ${bgColor} rounded-2xl shadow-lg p-8 flex flex-col items-center text-center
        hover:scale-105 hover:shadow-2xl hover:-translate-y-2 
        transition-all duration-300 ease-in-out relative overflow-hidden
        group
      `}
    >
      {/* Glow border effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-teal-400 transition duration-300"></div>

      {/* Icon */}
      <div className={`text-5xl mb-4 ${textColor} group-hover:scale-110 group-hover:text-teal-700 transition-transform duration-300`}>
        {icon}
      </div>

      {/* Title */}
      <h3 className={`text-xl font-bold mb-2 ${textColor} group-hover:text-teal-700 transition-colors duration-300`}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
