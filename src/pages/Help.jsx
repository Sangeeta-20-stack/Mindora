// src/pages/Help.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, BookOpen, HelpCircle, Phone, ShieldAlert } from "lucide-react";
import { useTranslation } from "react-i18next";

const Help = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  // Ensure faqs is an array
  const faqs = t("help.faqs", { returnObjects: true }) || [];

  return (
    <div className="flex min-h-screen bg-[#fdf6e3] dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-green-900 dark:bg-green-800">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        <Topbar title={t("help.title")} />

        <main className="p-8 space-y-10">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-green-800 to-green-600 text-white rounded-2xl p-10 text-center shadow-lg">
            <h1 className="text-4xl font-bold mb-3">{t("help.heroTitle")}</h1>
            <p className="text-lg opacity-90">{t("help.heroText")}</p>
          </div>

          {/* Quick Start Guide */}
          <Section
            title={t("help.quickStartTitle")}
            icon={<BookOpen className="text-green-800 dark:text-green-400" />}
          >
            <ul className="list-disc pl-6 space-y-2 text-green-900 dark:text-gray-200">
              {t("help.quickStartItems", { returnObjects: true }).map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </Section>

          {/* FAQs */}
          <FAQSection faqs={faqs} openIndex={openIndex} setOpenIndex={setOpenIndex} t={t} />

          {/* Feature Walkthrough */}
          <Section
            title={t("help.featureWalkthroughTitle")}
            icon={<HelpCircle className="text-green-800 dark:text-green-400" />}
          >
            <ul className="list-disc pl-6 space-y-2 text-green-900 dark:text-gray-200">
              {t("help.featureWalkthroughItems", { returnObjects: true }).map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </Section>

          {/* Contact & Support */}
          <Section
            title={t("help.contactTitle")}
            icon={<Phone className="text-green-800 dark:text-green-400" />}
          >
            <div className="space-y-2">
              <p
                className="text-green-900 dark:text-gray-200"
                dangerouslySetInnerHTML={{ __html: t("help.contactEmail") }}
              />
              <p
                className="text-green-900 dark:text-gray-200"
                dangerouslySetInnerHTML={{ __html: t("help.contactUrgent") }}
              />
            </div>
          </Section>

          {/* Safety Note */}
          <Section
            title={t("help.safetyTitle")}
            icon={<ShieldAlert className="text-red-600 dark:text-red-400" />}
          >
            <p className="text-green-800 dark:text-gray-300">{t("help.safetyNote")}</p>
          </Section>
        </main>
      </div>
    </div>
  );
};

// Section wrapper
const Section = ({ title, children, icon }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-green-200 dark:border-gray-700 hover:shadow-lg transition">
    <div className="flex items-center gap-2 mb-3">
      {icon}
      <h2 className="text-xl font-semibold text-green-900 dark:text-gray-100">{title}</h2>
    </div>
    {children}
  </div>
);

// FAQ Section with accordion
const FAQSection = ({ faqs, openIndex, setOpenIndex, t }) => {
  return (
    <Section
      title={t("help.faqTitle")}
      icon={<HelpCircle className="text-green-800 dark:text-green-400" />}
    >
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-[#fdfdfb] dark:bg-gray-700 border border-green-200 dark:border-gray-600 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <span className="text-green-900 dark:text-gray-100 font-medium">{faq.q}</span>
              {openIndex === i ? (
                <ChevronUp className="text-green-700 dark:text-green-400" />
              ) : (
                <ChevronDown className="text-green-700 dark:text-green-400" />
              )}
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 text-green-800 dark:text-gray-300 text-sm"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Help;
