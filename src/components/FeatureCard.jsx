import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ image, title, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="
        w-32 sm:w-36 md:w-40 h-40 flex flex-col items-center justify-center
        rounded-xl shadow-md bg-white hover:bg-green-900 hover:text-white 
        transition-all duration-300 ease-in-out cursor-pointer
      "
    >
      {/* Icon/Image */}
      <div className="w-16 h-16 mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain rounded-md"
        />
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-center">{title}</h3>
    </motion.div>
  );
};

export default FeatureCard;
