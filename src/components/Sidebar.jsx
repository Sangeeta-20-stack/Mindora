import React from "react";
import {
  LayoutDashboard,
  BarChart3,
  Calendar,
  MessageSquare,
  Settings,
  User,
  LogOut,
  HelpCircle,
  PhoneCall,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const Sidebar = () => {
  // Animation variants
  const containerVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
   <motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="w-64 bg-teal-50 h-full min-h-screen p-6 flex flex-col shadow-lg"
>
      {/* Logo */}
      <motion.h1
        variants={itemVariants}
        className="text-2xl font-bold text-teal-700 mb-8 flex justify-center"
      >
        MINDLY
      </motion.h1>

      {/* Menu */}
      <motion.nav variants={containerVariants} className="flex-1 space-y-4">
        <SidebarItem icon={<LayoutDashboard />} label="Dashboard" active />
        <SidebarItem icon={<BarChart3 />} label="Analytics" />
        <SidebarItem icon={<Calendar />} label="Calendar" />
        <SidebarItem icon={<MessageSquare />} label="Feedback" />
        <SidebarItem icon={<Settings />} label="Settings" />
        <SidebarItem icon={<Users />} label="Psychologist Connect" />
        <SidebarItem icon={<PhoneCall />} label="Emergency Helpline" />
      </motion.nav>

      {/* Bottom Menu */}
      <motion.div variants={containerVariants} className="space-y-4">
        <SidebarItem icon={<User />} label="My Account" />
        <SidebarItem icon={<LogOut />} label="Sign Out" />
        <SidebarItem icon={<HelpCircle />} label="Help" />
      </motion.div>
    </motion.div>
  );
};

const SidebarItem = ({ icon, label, active }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, x: 5 }}
      whileTap={{ scale: 0.95 }}
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
        active ? "bg-teal-600 text-white" : "text-gray-700 hover:bg-teal-100"
      }`}
    >
      {icon}
      <span>{label}</span>
    </motion.div>
  );
};

export default Sidebar;
