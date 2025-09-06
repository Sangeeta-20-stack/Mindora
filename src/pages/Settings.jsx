// src/pages/Settings.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { User, Palette, Shield, HelpCircle, X, Mail } from "lucide-react";

const Settings = () => {
  const [showSupport, setShowSupport] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex min-h-screen bg-[#f7f6d5]" // cream background
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Topbar />

        {/* Content area */}
        <div className="p-10 space-y-10 max-w-5xl mx-auto w-full">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-green-900 tracking-tight relative inline-block"
          >
            Settings
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-green-900 rounded-full"></span>
          </motion.h2>

          {/* Profile Settings */}
          <SettingsCard icon={<User />} title="Profile">
            <p className="text-green-900 text-sm">
              Set a nickname to stay anonymous.
            </p>
            <input
              type="text"
              placeholder="Enter your nickname"
              className="mt-3 p-2 border border-green-900 rounded-lg w-full focus:ring-2 focus:ring-green-900"
            />
          </SettingsCard>

          {/* Appearance */}
          <SettingsCard icon={<Palette />} title="Appearance">
            <p className="text-green-900 text-sm">Choose light or dark mode.</p>
            <select className="mt-3 p-2 border border-green-900 rounded-lg focus:ring-2 focus:ring-green-900">
              <option>Light</option>
              <option>Dark</option>
              <option>System Default</option>
            </select>
          </SettingsCard>

          {/* Privacy & Security */}
          <SettingsCard icon={<Shield />} title="Privacy & Security">
            <p className="text-green-900 text-sm">
              Manage your privacy and secure your anonymous account.
            </p>
            <button className="mt-3 px-5 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition">
              Delete Account
            </button>
          </SettingsCard>

          {/* Help & Support */}
          <SettingsCard icon={<HelpCircle />} title="Help & Support">
            <p className="text-green-900 text-sm">
              Get assistance or contact support.
            </p>
            <button
              onClick={() => setShowSupport(true)}
              className="mt-3 px-5 py-2 bg-green-900 text-white rounded-lg shadow hover:bg-green-800 transition flex items-center gap-2"
            >
              <Mail size={18} /> Contact Support
            </button>
          </SettingsCard>
        </div>
      </div>

      {/* Support Modal */}
      <AnimatePresence>
        {showSupport && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 relative"
            >
              {/* Close button */}
              <button
                onClick={() => setShowSupport(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl font-bold text-green-900 mb-4">
                Contact Support
              </h3>
              <p className="text-sm text-green-700 mb-4">
                Let us know your issue or feedback. We’ll get back to you soon.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Message sent! Our support team will reach out.");
                  setShowSupport(false);
                }}
                className="space-y-4"
              >
                <input
                  type="email"
                  placeholder="Your email (optional)"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                />
                <textarea
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-green-900 text-white py-3 rounded-lg font-semibold hover:bg-green-800 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const SettingsCard = ({ icon, title, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="relative bg-gradient-to-br from-white to-[#f7f6d5] p-8 rounded-2xl shadow-lg border border-green-900 hover:shadow-2xl transition"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-green-900 text-white rounded-full shadow">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold text-green-900">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
};

export default Settings;
