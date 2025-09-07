import React from "react";
import { useTranslation } from "react-i18next";
import { LayoutDashboard, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const VolunteerSidebar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const menuItems = [
    {
      name: t("volunteer.dashboard"),
      icon: LayoutDashboard,
      path: "/volunteer-dashboard",
    },
    {
      name: t("volunteer.communityChat"),
      icon: MessageCircle,
      path: "/volunteer-community-chat",
    },
  ];

  return (
    <div className="h-full bg-green-900 dark:bg-gray-900 text-white dark:text-gray-100 flex flex-col p-5">
      {/* Brand */}
      <div className="text-2xl font-bold mb-10 text-white dark:text-gray-100">
        VRITTI
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-3">
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={idx}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                ${
                  isActive
                    ? "bg-green-700 dark:bg-green-800 text-white"
                    : "hover:bg-green-800 dark:hover:bg-gray-800"
                }
              `}
            >
              <Icon
                size={22}
                strokeWidth={2}
                className={`shrink-0 ${
                  isActive ? "text-white" : "text-gray-200 dark:text-gray-400"
                }`}
              />
              <span className="capitalize">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default VolunteerSidebar;
