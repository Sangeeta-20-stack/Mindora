// src/components/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Globe, Target, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#f7f6d5] dark:bg-gray-900 py-20 px-6 text-center transition-colors duration-300"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold mb-10 text-[#144d25] dark:text-green-200 font-serif transition-colors duration-300"
      >
        About Us
      </motion.h1>

      {/* Intro Text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-16 text-lg leading-relaxed"
      >
        <h2 className="mb-2 text-lg text-[#144d25] dark:text-gray-200 mb-12">
          At <span className="font-bold">Vritti</span>, we believe that mental
          health is just as important as academics.
        </h2>
        <p className="text-lg text-[#144d25] dark:text-gray-300 mb-12">
          Our platform is designed to support students by providing:
        </p>
      </motion.div>

      {/* Mission / Vision / Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 15px 25px rgba(20,77,37,0.4)",
          }}
          className="bg-[#144d25] dark:bg-green-800 text-white dark:text-green-50 rounded-2xl p-10 shadow-lg relative overflow-hidden transition-colors duration-300"
        >
          <Globe className="w-10 h-10 mx-auto mb-4 text-green-200" />
          <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
          <p className="text-sm leading-relaxed">
            To create a safe, stigma-free digital ecosystem where institutions
            can proactively support mental well-being through AI-driven tools,
            community care, and accessibility for all.
          </p>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent rounded-2xl pointer-events-none"></div>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 15px 25px rgba(20,77,37,0.4)",
          }}
          className="bg-[#144d25] dark:bg-green-800 text-white dark:text-green-50 rounded-2xl p-10 shadow-lg relative overflow-hidden transition-colors duration-300"
        >
          <Target className="w-10 h-10 mx-auto mb-4 text-green-200" />
          <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
          <p className="text-sm leading-relaxed">
            A future where mental health is seamlessly integrated into every
            institution — empowering individuals, strengthening communities, and
            normalizing support as a collective responsibility.
          </p>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent rounded-2xl pointer-events-none"></div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 15px 25px rgba(20,77,37,0.4)",
          }}
          className="bg-[#144d25] dark:bg-green-800 text-white dark:text-green-50 rounded-2xl p-10 shadow-lg relative overflow-hidden transition-colors duration-300"
        >
          <Sparkles className="w-10 h-10 mx-auto mb-4 text-green-200" />
          <h3 className="text-xl font-semibold mb-4">Our Values</h3>
          <p className="text-sm leading-relaxed">
            Compassion, Innovation, Inclusivity, Collaboration, Confidentiality
            guide everything we do at Vritti.
          </p>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent rounded-2xl pointer-events-none"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
