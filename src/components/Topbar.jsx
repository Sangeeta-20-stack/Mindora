import React from "react";
import { Bell, Settings } from "lucide-react";
import { motion } from "framer-motion";

const Topbar = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 15 }}
      className="flex items-center justify-between p-4 bg-white shadow rounded-tr-2xl rounded-tl-2xl ml-[1px]"
    >
      {/* Search */}
      <motion.input
        whileFocus={{ scale: 1.02, boxShadow: "0px 0px 8px rgba(13,148,136,0.4)" }}
        type="text"
        placeholder="Search here"
        className="px-4 py-2 border rounded-lg w-1/2 outline-none"
      />

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer"
        >
          <Settings color="#0d9488" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer"
        >
          <Bell color="#f59e0b" />
        </motion.div>

        {/* Toggle Switch */}
        <div className="w-12 h-6 rounded-full p-1 cursor-pointer flex items-center bg-gray-200">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="w-4 h-4 bg-teal-600 rounded-full shadow"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Topbar;
