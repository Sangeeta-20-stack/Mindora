import React from "react";
import { motion } from "framer-motion";

const VisionCard = ({ title, description, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center 
                 transition-all duration-300 ease-in-out 
                 hover:scale-105 hover:shadow-2xl hover:shadow-teal-300"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-teal-600">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

export default VisionCard;
