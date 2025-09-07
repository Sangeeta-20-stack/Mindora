// src/pages/ForumModeration.jsx
import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import Topbar from "../components/Topbar";
import { useTranslation } from "react-i18next";

const ForumModeration = () => {
  const { t } = useTranslation();

  // Dummy reported posts
  const reports = [
    {
      id: 1,
      author: "Aditya Barman",
      role: t("forumModeration.volunteer"),
      content: t("forumModeration.samplePost"),
      reportCount: 12,
    },
    {
      id: 2,
      author: "Aditya Barman",
      role: t("forumModeration.volunteer"),
      content: t("forumModeration.samplePost"),
      reportCount: 12,
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#fdf6e3] dark:bg-gray-900 transition-colors">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 flex flex-col">
        {/* Topbar */}
        <div className="sticky top-0 z-20 bg-[#fdf6e3] dark:bg-gray-800 shadow transition-colors">
          <Topbar />
        </div>

        {/* Page Content */}
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-green-900 dark:text-green-100 transition-colors">
              {t("forumModeration.title")}
            </h1>
            <button className="bg-green-900 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-green-800 transition">
              {t("forumModeration.sort")} <span>🔽</span>
            </button>
          </div>

          {/* Reported Articles List */}
          <div className="space-y-8">
            {reports.map((post) => (
              <div
                key={post.id}
                className="border-b border-green-800 dark:border-green-600 pb-6 last:border-none transition-colors"
              >
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center text-white">
                    👤
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-green-900 dark:text-green-100 transition-colors">
                      {post.author}
                    </h2>
                    <p className="text-sm text-green-800 dark:text-green-400 transition-colors">
                      {post.role}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <p className="text-green-900 dark:text-green-100 mb-4 transition-colors">
                  {post.content}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="relative bg-green-900 text-white px-5 py-2 rounded-full font-medium hover:bg-green-800 transition-colors">
                    {t("forumModeration.reports")}
                    <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      +{post.reportCount}
                    </span>
                  </button>

                  <button className="bg-green-900 text-white px-5 py-2 rounded-full font-medium hover:bg-green-800 transition-colors">
                    {t("forumModeration.delete")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumModeration;
