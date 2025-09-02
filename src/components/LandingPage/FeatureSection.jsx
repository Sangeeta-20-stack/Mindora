import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "../FeatureCard.jsx";

// ✅ Importing icons from lucide-react
import { BookOpen, MessageCircle, UserCheck, CalendarCheck, Music } from "lucide-react";

const FeatureSection = () => {
  const features = [
    { icon: <BookOpen className="w-10 h-10 text-teal-600" />, title: "Resource Hub", description: "Access a variety of mental wellness resources anytime." },
    { icon: <MessageCircle className="w-10 h-10 text-teal-600" />, title: "Anonymous Chat Support", description: "Talk freely with trained supporters without revealing your identity." },
    { icon: <UserCheck className="w-10 h-10 text-teal-600" />, title: "Certified Psychologists", description: "Get guidance from certified mental health professionals." },
    { icon: <CalendarCheck className="w-10 h-10 text-teal-600" />, title: "Daily Check-Ins", description: "Monitor your mood and mental wellness daily." },
    { icon: <Music className="w-10 h-10 text-teal-600" />, title: "Music Therapy", description: "Relax and improve your mood with curated music therapy sessions." },
  ];

  const bullets = [
    "Progress Tracking",
    "24/7 Support",
    "Personalized Resources",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-teal-300 py-20 px-6 text-center relative overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-extrabold mb-6 text-white"
      >
        Our Features
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg max-w-3xl mx-auto mb-6 text-white opacity-80"
      >
        Explore the tools and services we provide to support your mental wellness journey.
      </motion.p>

      {/* Horizontal Bullet Points with hover glow */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex justify-center gap-6 mb-12 flex-wrap"
      >
        {bullets.map((bullet, index) => (
          <span
            key={index}
            className="bg-teal-200 text-teal-800 font-semibold text-lg px-4 py-2 rounded-full shadow-sm 
                       hover:bg-teal-100 hover:shadow-md hover:-translate-y-1 
                       transition-all duration-300 cursor-pointer"
          >
            {bullet}
          </span>
        ))}
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto"
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={0.1 * index}
            bgColor="bg-teal-50"
            textColor="text-teal-600"
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FeatureSection;
