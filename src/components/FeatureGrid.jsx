// src/components/FeatureGrid.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ import navigate hook
import DashboardCard from "./DashboardCard";
import moodImg from "../assets/mood.png";
import wellnessImg from "../assets/wellness.png";
import stressImg from "../assets/stress.png";
import relaxImg from "../assets/relax.png";
import reflectionImg from "../assets/reflection.png";
import communityImg from "../assets/community.png";

const FeatureGrid = () => {
  const navigate = useNavigate(); // ✅ initialize navigate

  const features = [
    { title: "Daily Mood Tracker", image: moodImg, color: "from-teal-500 to-teal-300", path: "/daily-mood-tracker" },
    { title: "Wellness Buddy", image: wellnessImg, color: "from-indigo-500 to-indigo-300", path: "/wellness-buddy" }, // ✅ navigate here
    { title: "Stress Level Check", image: stressImg, color: "from-rose-500 to-rose-300", path: "/stress-check" },
    { title: "Relaxation Tools", image: relaxImg, color: "from-emerald-500 to-emerald-300", path: "/relaxation" },
    { title: "Reflection Box", image: reflectionImg, color: "from-orange-500 to-orange-300", path: "/reflection" },
    { title: "Community Wall", image: communityImg, color: "from-purple-500 to-purple-300", path: "/community-wall" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {features.map((f, i) => (
        <motion.div
          key={i}
          variants={cardVariants}
          whileHover={{
            scale: 1.07,
            y: -8,
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
          className={`rounded-2xl p-[2px] bg-gradient-to-r ${f.color} cursor-pointer`}
          onClick={() => f.path && navigate(f.path)} // ✅ navigate on click
        >
          <div className="bg-white rounded-2xl h-full">
            <DashboardCard title={f.title} image={f.image} />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeatureGrid;
