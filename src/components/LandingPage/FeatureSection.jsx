// src/components/FeatureSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Bot, ClipboardCheck, User, BookOpen, Handshake } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <Bot className="w-10 h-10 mb-3 text-white dark:text-green-200" />,
      title: "AI Chatbot",
      description:
        "Get instant mental health support through our smart, confidential chatbot.",
    },
    {
      icon: <ClipboardCheck className="w-10 h-10 mb-3 text-white dark:text-green-200" />,
      title: "Screening Test",
      description:
        "Assess your well-being with quick, science-based mental health screenings.",
    },
    {
      icon: <User className="w-10 h-10 mb-3 text-white dark:text-green-200" />,
      title: "Book Counsellor",
      description:
        "Easily schedule sessions with certified mental health professionals.",
    },
    {
      icon: <BookOpen className="w-10 h-10 mb-3 text-white dark:text-green-200" />,
      title: "Resources Hub",
      description:
        "Explore curated articles, videos, and self-help guides for wellness.",
    },
    {
      icon: <Handshake className="w-10 h-10 mb-3 text-white dark:text-green-200" />,
      title: "Peer Support Forum",
      description:
        "Connect with peers, share experiences, and find encouragement together.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#f7f6d5] dark:bg-gray-900 py-16 px-6 text-center transition-colors duration-300"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold mb-4 text-[#144d25] dark:text-green-200 font-serif transition-colors duration-300"
      >
        Our Features
      </motion.h1>

      {/* Subtext */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg text-[#144d25] dark:text-gray-300 mb-12 max-w-2xl mx-auto transition-colors duration-300"
      >
        Explore the features we provide to support your mental health and well-being.
      </motion.h2>

      {/* Feature Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 15px 25px rgba(20,77,37,0.4)",
            }}
            className="bg-[#144d25] dark:bg-green-800 text-white dark:text-green-50 rounded-2xl p-6 shadow-md flex flex-col items-center justify-center relative overflow-hidden cursor-pointer transition-colors duration-300"
          >
            {feature.icon}
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-center">{feature.description}</p>

            {/* Reflection / glow overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 dark:from-green-500/10 to-transparent rounded-2xl pointer-events-none"></div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FeatureSection;
