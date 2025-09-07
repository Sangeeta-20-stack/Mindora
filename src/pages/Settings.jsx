// src/pages/Settings.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { User, Palette, Shield, HelpCircle, X, Mail } from "lucide-react";

const Settings = () => {
  const { t } = useTranslation();
  const [showSupport, setShowSupport] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex min-h-screen bg-[#f7f6d5] dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Topbar title={t("settings.title")} />

        {/* Content area */}
        <div className="p-10 space-y-10 max-w-5xl mx-auto w-full">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-green-900 dark:text-gray-100 tracking-tight relative inline-block"
          >
            {t("settings.title")}
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-green-900 dark:bg-green-500 rounded-full"></span>
          </motion.h2>

          {/* Profile Settings */}
          <SettingsCard icon={<User />} title={t("settings.profile.title")}>
            <p className="text-green-900 dark:text-gray-300 text-sm">{t("settings.profile.desc")}</p>
            <input
              type="text"
              placeholder={t("settings.profile.placeholder")}
              className="mt-3 p-2 border border-green-900 dark:border-gray-600 rounded-lg w-full 
                         focus:ring-2 focus:ring-green-900 dark:focus:ring-green-600
                         bg-white dark:bg-gray-800 text-green-900 dark:text-gray-100 transition-colors"
            />
          </SettingsCard>

          {/* Appearance */}
          <SettingsCard icon={<Palette />} title={t("settings.appearance.title")}>
            <p className="text-green-900 dark:text-gray-300 text-sm">{t("settings.appearance.desc")}</p>
            <select
              className="mt-3 p-2 border border-green-900 dark:border-gray-600 rounded-lg 
                         focus:ring-2 focus:ring-green-900 dark:focus:ring-green-600
                         bg-white dark:bg-gray-800 text-green-900 dark:text-gray-100 transition-colors"
            >
              <option>{t("settings.appearance.light")}</option>
              <option>{t("settings.appearance.dark")}</option>
              <option>{t("settings.appearance.system")}</option>
            </select>
          </SettingsCard>

          {/* Privacy & Security */}
          <SettingsCard icon={<Shield />} title={t("settings.privacy.title")}>
            <p className="text-green-900 dark:text-gray-300 text-sm">{t("settings.privacy.desc")}</p>
            <button className="mt-3 px-5 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition">
              {t("settings.privacy.delete")}
            </button>
          </SettingsCard>

          {/* Help & Support */}
          <SettingsCard icon={<HelpCircle />} title={t("settings.support.title")}>
            <p className="text-green-900 dark:text-gray-300 text-sm">{t("settings.support.desc")}</p>
            <button
              onClick={() => setShowSupport(true)}
              className="mt-3 px-5 py-2 bg-green-900 dark:bg-green-700 text-white rounded-lg shadow hover:bg-green-800 transition flex items-center gap-2"
            >
              <Mail size={18} /> {t("settings.support.button")}
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
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg p-6 relative transition-colors"
            >
              {/* Close button */}
              <button
                onClick={() => setShowSupport(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 dark:text-gray-400"
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl font-bold text-green-900 dark:text-gray-100 mb-4">
                {t("settings.support.modalTitle")}
              </h3>
              <p className="text-sm text-green-700 dark:text-gray-300 mb-4">{t("settings.support.modalDesc")}</p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(t("settings.support.alert"));
                  setShowSupport(false);
                }}
                className="space-y-4"
              >
                <input
                  type="email"
                  placeholder={t("settings.support.emailPlaceholder")}
                  className="w-full p-3 border rounded-lg 
                             border-green-900 dark:border-gray-600
                             bg-white dark:bg-gray-900 text-green-900 dark:text-gray-100
                             focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 outline-none"
                />
                <textarea
                  placeholder={t("settings.support.messagePlaceholder")}
                  rows={5}
                  required
                  className="w-full p-3 border rounded-lg 
                             border-green-900 dark:border-gray-600
                             bg-white dark:bg-gray-900 text-green-900 dark:text-gray-100
                             focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-green-900 dark:bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 shadow-lg"
                >
                  {t("settings.support.sendButton")}
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
      className="relative bg-gradient-to-br from-white to-[#f7f6d5] dark:from-gray-800 dark:to-gray-900 
                 p-8 rounded-2xl shadow-lg border border-green-900 dark:border-gray-700 
                 hover:shadow-2xl transition-colors duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-green-900 dark:bg-green-700 text-white rounded-full shadow">{icon}</div>
        <h3 className="text-2xl font-semibold text-green-900 dark:text-gray-100">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
};

export default Settings;
