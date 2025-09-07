import React from "react";
import { useTranslation } from "react-i18next";
import { LayoutDashboard, Calendar, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const CounsellorSidebar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const menuItems = [
    {
      name: t("counsellor.dashboard"),
      icon: LayoutDashboard,
      path: "/counsellor-dashboard",
    },
    {
      name: t("counsellor.appointment"),
      icon: Calendar,
      path: "/counsellor-appointments",
    },
    {
      name: t("counsellor.communityWall"),
      icon: Users,
      path: "/counsellor-community-wall",
    },
  ];

  return (
    <div className="h-full bg-green-900 text-white flex flex-col p-5">
      {/* Brand */}
      <div className="text-2xl font-bold mb-10">VRITTI</div>

      {/* Menu */}
      <nav className="flex-1 space-y-3">
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={idx}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition 
                ${isActive ? "bg-green-700 text-yellow-300" : "hover:bg-green-800"}
              `}
            >
              {/* ✅ Fixed icons */}
              <Icon size={22} strokeWidth={2} className="shrink-0 text-white" />
              <span className="capitalize">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default CounsellorSidebar;
