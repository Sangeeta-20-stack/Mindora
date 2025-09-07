// src/components/AdminSidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  MessageSquare,
  Shield,
  Inbox,
  BookOpen,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const AdminSidebar = () => {
  const location = useLocation(); // for active link styling
  const { t } = useTranslation();

  return (
    <aside className="bg-green-900 dark:bg-gray-900 text-white dark:text-green-100 w-64 min-h-screen p-4 flex flex-col transition-colors">
      {/* Brand */}
      <h1 className="text-2xl font-bold mb-6">VRITTI</h1>

      <nav className="flex flex-col gap-4">
        <Link
          to="/admin-dashboard"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
            location.pathname === "/admin-dashboard"
              ? "bg-green-600 dark:bg-green-700"
              : "hover:text-green-400"
          }`}
        >
          <LayoutDashboard size={20} /> {t("admin.dashboard")}
        </Link>

        <Link
          to="/manage-resources"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
            location.pathname === "/manage-resources"
              ? "bg-green-600 dark:bg-green-700"
              : "hover:text-green-400"
          }`}
        >
          <BookOpen size={20} /> {t("admin.manageResources")}
        </Link>

        <Link
          to="/admin-analytics"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
            location.pathname === "/admin-analytics"
              ? "bg-green-600 dark:bg-green-700"
              : "hover:text-green-400"
          }`}
        >
          <BarChart3 size={20} /> {t("admin.analytics")}
        </Link>

        <Link
          to="/community-forum"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
            location.pathname === "/community-forum"
              ? "bg-green-600 dark:bg-green-700"
              : "hover:text-green-400"
          }`}
        >
          <MessageSquare size={20} /> {t("admin.communityContribution")}
        </Link>

        <Link
          to="/forum-moderation"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
            location.pathname === "/forum-moderation"
              ? "bg-green-600 dark:bg-green-700"
              : "hover:text-green-400"
          }`}
        >
          <Shield size={20} /> {t("admin.forumModeration")}
        </Link>

        <Link
          to="/feedback-inbox"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
            location.pathname === "/feedback-inbox"
              ? "bg-green-600 dark:bg-green-700"
              : "hover:text-green-400"
          }`}
        >
          <Inbox size={20} /> {t("admin.feedbackInbox")}
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
