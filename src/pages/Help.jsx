// src/pages/Help.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  HelpCircle,
  Phone,
  ShieldAlert,
} from "lucide-react";

const Help = () => {
  return (
    <div className="flex min-h-screen bg-[#fdf6e3]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-green-900">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        <Topbar title="Help & Support" />

        <main className="p-8 space-y-10">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-green-800 to-green-600 text-white rounded-2xl p-10 text-center shadow-lg">
            <h1 className="text-4xl font-bold mb-3">Help & Support</h1>
            <p className="text-lg opacity-90">
              Need guidance? You’re in the right place. Explore guides, FAQs,
              and support resources below.
            </p>
          </div>

          {/* Quick Start Guide */}
          <Section
            title="Quick Start Guide"
            icon={<BookOpen className="text-green-800" />}
          >
            <ul className="list-disc pl-6 space-y-2 text-green-900">
              <li>Sign up or log in to access all features.</li>
              <li>
                Use the <strong>Reflection Box</strong> to journal your thoughts.
              </li>
              <li>
                Check <strong>Analytics</strong> to view your mood trends.
              </li>
              <li>
                Chat with your <strong>Wellness Buddy</strong> for support.
              </li>
              <li>
                Visit <strong>Relaxation</strong> and{" "}
                <strong>Stress Check</strong> for daily calm.
              </li>
            </ul>
          </Section>

          {/* FAQs */}
          <FAQSection />

          {/* Feature Walkthrough */}
          <Section
            title="Feature Walkthroughs"
            icon={<HelpCircle className="text-green-800" />}
          >
            <ul className="list-disc pl-6 space-y-2 text-green-900">
              <li>
                <strong>Reflection Box:</strong> Write daily journals, track
                moods, and set goals.
              </li>
              <li>
                <strong>Analytics:</strong> View your mood distribution, word
                count, and activity trends.
              </li>
              <li>
                <strong>Wellness Buddy:</strong> Chat with the AI for
                encouragement and support.
              </li>
              <li>
                <strong>Relaxation:</strong> Try breathing exercises and calming
                practices.
              </li>
            </ul>
          </Section>

          {/* Contact & Support */}
          <Section
            title="Contact & Support"
            icon={<Phone className="text-green-800" />}
          >
            <div className="space-y-2">
              <p className="text-green-900">
                💌 Email us at{" "}
                <a
                  href="mailto:support@wellnessapp.com"
                  className="text-green-700 underline"
                >
                  support@wellnessapp.com
                </a>{" "}
                for any issues or suggestions.
              </p>
              <p className="text-green-900">
                🚨 For urgent help, visit the{" "}
                <a
                  href="/emergency-helpline"
                  className="text-red-600 underline font-semibold"
                >
                  Emergency Helpline
                </a>{" "}
                page immediately.
              </p>
            </div>
          </Section>

          {/* Safety Note */}
          <Section
            title="Safety Note"
            icon={<ShieldAlert className="text-red-600" />}
          >
            <p className="text-green-800">
              ⚠️ This app is for self-care support and reflection. It is not a
              substitute for professional therapy or medical advice. If you’re
              struggling, please reach out to a licensed therapist or use the
              Emergency Helpline.
            </p>
          </Section>
        </main>
      </div>
    </div>
  );
};

// Section wrapper
const Section = ({ title, children, icon }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md border border-green-200 hover:shadow-lg transition">
    <div className="flex items-center gap-2 mb-3">
      {icon}
      <h2 className="text-xl font-semibold text-green-900">{title}</h2>
    </div>
    {children}
  </div>
);

// FAQ Section with accordion
const FAQSection = () => {
  const faqs = [
    {
      q: "How do I reset my password?",
      a: "Go to the Login page and click 'Forgot Password'. Follow the instructions to reset it.",
    },
    {
      q: "Where can I see my reflections history?",
      a: "All your reflections are saved in the Reflection Box. You can browse, edit, or delete them anytime.",
    },
    {
      q: "Is my data private?",
      a: "Yes. All your reflections are stored locally in your browser. Your privacy is protected.",
    },
    {
      q: "How do I contact support?",
      a: "Scroll down to the Contact & Support section to reach us directly.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Section title="Frequently Asked Questions" icon={<HelpCircle className="text-green-800" />}>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-[#fdfdfb] border border-green-200 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <span className="text-green-900 font-medium">{faq.q}</span>
              {openIndex === i ? (
                <ChevronUp className="text-green-700" />
              ) : (
                <ChevronDown className="text-green-700" />
              )}
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 text-green-800 text-sm"
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
