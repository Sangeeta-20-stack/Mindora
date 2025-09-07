// src/pages/CommunityForum.jsx
import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import Topbar from "../components/Topbar";
import { useTranslation } from "react-i18next";

const CommunityForum = () => {
  const { t } = useTranslation();

  const posts = [
    {
      id: 1,
      name: "Aditya Barman",
      role: t("communityForum.volunteer"),
      content: t("communityForum.samplePost"),
      reports: 12,
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

        {/* Forum Content */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-green-900 dark:text-green-100 mb-6 transition-colors">
            {t("communityForum.title")}
          </h1>

          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-[#fdf6e3] dark:bg-gray-800 border border-green-900/20 dark:border-green-600/30 p-6 rounded-2xl shadow-sm mb-8 transition-colors"
            >
              {/* User Info */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-green-900 text-white flex items-center justify-center">
                  👤
                </span>
                <h2 className="text-lg font-bold text-green-900 dark:text-green-100 transition-colors">
                  {post.name}
                </h2>
                <span className="text-sm text-green-800 dark:text-green-400 transition-colors">
                  {post.role}
                </span>
              </div>

              {/* Post Content */}
              <p className="text-green-900 dark:text-green-100 mb-4 transition-colors">
                {post.content}
              </p>

              {/* Actions */}
              <div className="flex items-center gap-4 text-green-900 dark:text-green-100">
                <button className="hover:text-green-700 dark:hover:text-green-400">👍</button>
                <button className="hover:text-green-700 dark:hover:text-green-400">👎</button>
                <button className="hover:text-green-700 dark:hover:text-green-400">
                  {t("communityForum.reply")}
                </button>

                <div className="relative">
                  <button className="bg-green-900 text-white px-4 py-2 rounded-full hover:bg-green-800 transition-colors">
                    {t("communityForum.reports")}
                  </button>
                  {post.reports > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      +{post.reports}
                    </span>
                  )}
                </div>

                <button className="bg-green-900 text-white px-4 py-2 rounded-full hover:bg-green-800 transition-colors">
                  {t("communityForum.delete")}
                </button>
              </div>

              {/* Divider */}
              <hr className="my-6 border-green-900/40 dark:border-green-600/40 transition-colors" />

              {/* Reply Box */}
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-green-900 text-white flex items-center justify-center">
                  👤
                </span>
                <div className="flex-1 flex items-center border border-green-900 dark:border-green-600 rounded-full px-4 py-2 transition-colors bg-white dark:bg-gray-700">
                  <input
                    type="text"
                    placeholder={t("communityForum.placeholder")}
                    className="flex-1 outline-none bg-transparent text-green-900 dark:text-green-100 placeholder-green-700 dark:placeholder-green-400"
                  />
                  <button className="text-green-900 dark:text-green-100 hover:text-green-700 dark:hover:text-green-400 text-xl">
                    📨
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityForum;
