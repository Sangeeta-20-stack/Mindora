import React from "react";
import VisionCard from "../VisionCard";
import { motion } from "framer-motion";
import { Globe, Target, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-teal-100 py-20 px-6 text-center text-gray-900"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold mb-6"
      >
        <span className="text-teal-600">About</span>{" "}
        <span className="text-cyan-600">Us</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg max-w-3xl mx-auto mb-12 opacity-80"
      >
        At <span className="font-bold text-teal-600">Mindly</span>, we are
        driven by a purpose — to make mental wellness accessible and empowering
        for everyone.
      </motion.p>

      {/* Vision / Mission / Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <VisionCard
          title="Our Vision"
          description="A world where mental health is prioritized as much as physical health, enabling every individual to thrive."
          icon={<Globe className="w-10 h-10 text-teal-600" />}
          delay={0.1}
        />
        <VisionCard
          title="Our Mission"
          description="To provide students and individuals with tools, community, and knowledge to build resilience and emotional balance."
          icon={<Target className="w-10 h-10 text-cyan-600" />}
          delay={0.2}
        />
        <VisionCard
          title="Our Values"
          description="Compassion, inclusivity, and innovation guide everything we do at Mindly."
          icon={<Sparkles className="w-10 h-10 text-yellow-500" />}
          delay={0.3}
        />
      </div>
    </motion.section>
  );
};

export default AboutSection;
