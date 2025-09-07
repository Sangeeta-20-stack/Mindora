// src/components/Topbar.jsx
import React, { useContext } from "react";
import { Bell } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../context/ThemeContext"; // ✅ import theme context

const Topbar = () => {
  const { i18n } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext); // ✅ use theme context

  // ✅ handle language change
  const changeLanguage = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("language", selectedLang); // persist choice
  };

  // ✅ toggle light/dark mode
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 15 }}
      className="flex items-center justify-end p-4 bg-[#f7f6d5] dark:bg-gray-900 shadow rounded-tr-2xl rounded-tl-2xl ml-[1px] gap-4"
    >
      {/* Bell Icon */}
      <motion.div
        whileHover={{ scale: 1.2, boxShadow: "0 0 15px rgba(0,0,0,0.3)" }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer w-10 h-10 flex items-center justify-center bg-green-900 text-white rounded-full shadow transition-all"
      >
        <Bell color="white" />
      </motion.div>

      {/* ✅ Toggle Switch (Light/Dark) */}
      <div
        onClick={toggleTheme}
        className={`w-12 h-6 rounded-full p-1 cursor-pointer flex items-center transition-colors ${
          theme === "dark" ? "bg-green-900" : "bg-gray-300"
        }`}
      >
        <motion.div
          layout
          className="w-4 h-4 bg-white rounded-full shadow"
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          style={{
            transform: theme === "dark" ? "translateX(24px)" : "translateX(0px)",
          }}
        />
      </div>

      {/* ✅ Language Switcher */}
      <select
        onChange={changeLanguage}
        defaultValue={localStorage.getItem("language") || "en"}
        className="px-3 py-1 border border-green-900 rounded-lg bg-white dark:bg-gray-800 text-green-900 dark:text-white font-medium shadow hover:bg-green-50 dark:hover:bg-gray-700"
      >
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
        <option value="bn">বাংলা</option>
        <option value="ta">தமிழ்</option>
        <option value="te">తెలుగు</option>
        <option value="ml">മലയാളം</option>
        <option value="mr">मराठी</option>
        <option value="gu">ગુજરાતી</option>
      </select>
    </motion.div>
  );
};

export default Topbar;
