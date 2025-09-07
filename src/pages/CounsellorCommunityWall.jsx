// src/pages/CounsellorCommunityWall.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CounsellorSidebar from "../components/CounsellorSidebar";
import Topbar from "../components/Topbar";
import { Send, UserCircle } from "lucide-react"; // ✅ UserCircle used as placeholder avatar

const CounsellorCommunityWall = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSend = () => {
    if (message.trim() === "") return;
    setPosts([
      ...posts,
      { text: message, time: new Date().toLocaleTimeString() },
    ]);
    setMessage("");
  };

  return (
    <div className="flex min-h-screen bg-[#fdf6e3] dark:bg-gray-950">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64">
        <CounsellorSidebar />
      </div>

      {/* Main Section */}
      <div className="ml-64 flex-1 flex flex-col">
        {/* Topbar */}
        <div className="sticky top-0 z-20 bg-[#fdf6e3] dark:bg-gray-900 shadow">
          <Topbar />
        </div>

        {/* Page Content */}
        <div className="p-8">
          {/* Header */}
          <h1 className="text-3xl font-bold text-green-900 dark:text-green-200 mb-6">
            {t("counsellor.communityWall")}
          </h1>

          <div className="flex gap-6">
            {/* Community Wall */}
            <div className="flex-1 bg-green-900 dark:bg-green-800 text-white p-6 rounded-3xl shadow-md flex flex-col">
              {/* Posts Area */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
                {posts.length === 0 ? (
                  <p className="text-gray-300 text-sm">
                    {t("counsellor.noPosts")}
                  </p>
                ) : (
                  posts.map((post, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-white dark:bg-gray-100 text-green-900 p-4 rounded-xl shadow-sm"
                    >
                      {/* Placeholder Avatar */}
                      <UserCircle
                        size={36}
                        className="text-green-700 dark:text-green-800 shrink-0"
                      />
                      <div className="flex flex-col">
                        <p className="text-base">{post.text}</p>
                        <span className="text-xs text-gray-500">
                          {post.time}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Message Input */}
              <div className="flex items-center gap-3">
                <UserCircle size={40} className="text-white dark:text-gray-200 shrink-0" />
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("counsellor.typeMessage")}
                  className="flex-1 p-3 rounded-full bg-white dark:bg-gray-100 text-green-900 outline-none"
                />
                <button
                  onClick={handleSend}
                  className="bg-green-700 dark:bg-green-600 p-3 rounded-full hover:bg-green-800 dark:hover:bg-green-700 transition"
                >
                  <Send size={20} className="text-white" />
                </button>
              </div>
            </div>

            {/* Side Info Box */}
            <div className="bg-green-900 dark:bg-green-800 text-white p-6 rounded-2xl w-64 flex items-center justify-center text-center text-sm">
              {t("counsellor.sharePositive")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounsellorCommunityWall;
