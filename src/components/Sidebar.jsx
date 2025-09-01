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
  BookOpen,   // 👈 Added for Journal
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  // menu items with path
  const menuItems = [
    { icon: <LayoutDashboard />, label: "Dashboard", path: "/dashboard" },
    { icon: <BookOpen />, label: "Journal", path: "/journal" },   // 👈 Added Journal
    { icon: <BarChart3 />, label: "Analytics", path: "/analytics" },
    { icon: <Calendar />, label: "Calendar", path: "/calendar" },
    { icon: <MessageSquare />, label: "Feedback", path: "/feedback" },
    { icon: <Settings />, label: "Settings", path: "/settings" },
    { icon: <Users />, label: "Psychologist Connect", path: "/doctor" },
    { icon: <PhoneCall />, label: "Emergency Helpline", path: "/helpline" },
  ];

  const bottomMenu = [
    { icon: <User />, label: "My Account", path: "/account" },
    { icon: <LogOut />, label: "Sign Out", path: "/login" },
    { icon: <HelpCircle />, label: "Help", path: "/help" },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-64 bg-teal-50 h-full min-h-screen p-6 flex flex-col shadow-lg"
    >
      {/* Logo */}
      <motion.h1
        variants={containerVariants}
        className="text-2xl font-bold text-teal-700 mb-8 flex justify-center"
      >
        MINDLY
      </motion.h1>

      {/* Menu */}
      <motion.nav variants={containerVariants} className="flex-1 space-y-4">
        {menuItems.map((item, i) => (
          <SidebarItem
            key={i}
            icon={item.icon}
            label={item.label}
            active={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          />
        ))}
      </motion.nav>

      {/* Bottom Menu */}
      <motion.div variants={containerVariants} className="space-y-4">
        {bottomMenu.map((item, i) => (
          <SidebarItem
            key={i}
            icon={item.icon}
            label={item.label}
            active={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

const SidebarItem = ({ icon, label, active, onClick }) => {
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
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </motion.div>
  );
};

export default Sidebar;
