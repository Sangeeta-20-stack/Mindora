import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { User, Palette, Shield, HelpCircle } from "lucide-react";

const Settings = () => {
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
            <button className="mt-3 px-5 py-2 bg-green-900 text-white rounded-lg shadow hover:bg-green-800 transition">
              Contact Support
            </button>
          </SettingsCard>
        </div>
      </div>
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
        <div className="p-3 bg-green-900 text-white rounded-full shadow">{icon}</div>
        <h3 className="text-2xl font-semibold text-green-900">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
};

export default Settings;
