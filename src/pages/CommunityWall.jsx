// src/pages/CommunityWall.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { motion } from "framer-motion";
import { Flag, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

const CommunityWall = () => {
  const { t } = useTranslation();

  const [threads, setThreads] = useState([
    { id: 1, title: t("communityWall.threadExamStress") },
    { id: 2, title: t("communityWall.threadHomesickness") },
    { id: 3, title: t("communityWall.threadOpenChat") },
  ]);
  const [selectedThread, setSelectedThread] = useState(1);
  const [posts, setPosts] = useState({});
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("communityPosts")) || {};
    setPosts(stored);
  }, []);

  const savePosts = (updated) => {
    setPosts(updated);
    localStorage.setItem("communityPosts", JSON.stringify(updated));
  };

  const getRandomAvatar = () => {
    const avatars = ["🐱", "🐶", "🦊", "🐼", "🐧", "🐸", "🐨"];
    return avatars[Math.floor(Math.random() * avatars.length)];
  };

  const handlePost = () => {
    if (!newPost.trim()) return;
    const post = {
      id: Date.now(),
      avatar: getRandomAvatar(),
      text: newPost,
      reported: false,
      date: new Date().toLocaleString(),
    };

    const updated = {
      ...posts,
      [selectedThread]: [...(posts[selectedThread] || []), post],
    };

    savePosts(updated);
    setNewPost("");
  };

  const handleReport = (threadId, postId) => {
    const updated = {
      ...posts,
      [threadId]: posts[threadId].map((p) =>
        p.id === postId ? { ...p, reported: true } : p
      ),
    };
    savePosts(updated);
  };

  return (
    <div className="flex h-screen bg-[#fdf6e3] dark:bg-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-64">
        <Topbar />

        <div className="flex-1 flex p-6 gap-6 overflow-hidden">
          {/* Thread List */}
          <div className="w-1/4 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 border border-green-200 dark:border-gray-700">
            <h2 className="text-lg font-bold text-green-900 dark:text-green-100 mb-4">
              {t("communityWall.threadsTitle")}
            </h2>
            <ul className="space-y-3">
              {threads.map((tObj) => (
                <li key={tObj.id}>
                  <button
                    onClick={() => setSelectedThread(tObj.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition ${
                      selectedThread === tObj.id
                        ? "bg-green-900 text-white shadow dark:bg-green-700"
                        : "bg-green-50 text-green-900 hover:bg-green-100 dark:bg-gray-700 dark:text-green-100 dark:hover:bg-gray-600"
                    }`}
                  >
                    {tObj.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Posts Section */}
          <div className="flex-1 flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-green-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">
              {threads.find((tObj) => tObj.id === selectedThread)?.title ||
                t("communityWall.selectThread")}
            </h2>

            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {(posts[selectedThread] || []).map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl shadow-sm border ${
                    post.reported
                      ? "bg-red-50 border-red-300 dark:bg-red-900 dark:border-red-700"
                      : "bg-green-50 border-green-200 dark:bg-green-900 dark:border-green-700"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xl">{post.avatar}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                  </div>
                  <p className="mt-2 text-green-900 dark:text-green-100">{post.text}</p>

                  {!post.reported && (
                    <button
                      onClick={() => handleReport(selectedThread, post.id)}
                      className="flex items-center gap-1 text-red-500 text-sm mt-2 hover:text-red-700 dark:hover:text-red-400"
                    >
                      <Flag size={14} /> {t("communityWall.report")}
                    </button>
                  )}
                  {post.reported && (
                    <p className="text-xs text-red-500 mt-2">
                      🚨 {t("communityWall.reportedMsg")}
                    </p>
                  )}
                </motion.div>
              ))}

              {(posts[selectedThread] || []).length === 0 && (
                <p className="text-green-700 dark:text-green-300 text-center mt-10">
                  {t("communityWall.noPosts")}
                </p>
              )}
            </div>

            {/* New Post Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder={t("communityWall.newPostPlaceholder")}
                className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-[#fdf6e3] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              />
              <button
                onClick={handlePost}
                className="bg-green-900 text-white px-4 py-2 rounded-lg hover:bg-green-800 flex items-center gap-2 dark:bg-green-700 dark:hover:bg-green-600"
              >
                <Send size={16} /> {t("communityWall.postBtn")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityWall;
