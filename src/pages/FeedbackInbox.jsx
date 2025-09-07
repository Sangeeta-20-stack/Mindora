import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import Topbar from "../components/Topbar";
import { useTranslation } from "react-i18next";
import { Bell, SlidersHorizontal } from "lucide-react";

const FeedbackInbox = () => {
  const { t } = useTranslation();

  // Dummy feedback list
  const feedbacks = [
    { id: 114, detail: t("feedbackInbox.feedbackDetails") },
    { id: 116, detail: t("feedbackInbox.feedbackDetails") },
    { id: 2268, detail: t("feedbackInbox.feedbackDetails") },
  ];

  return (
    <div className="flex min-h-screen bg-[#fdf6e3]">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 flex flex-col">
        {/* Topbar */}
        <div className="sticky top-0 z-20 bg-[#fdf6e3] shadow">
          <Topbar />
        </div>

        {/* Page Content */}
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-green-900">
              {t("feedbackInbox.title")}
            </h1>

            {/* Search + Actions */}
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder={t("feedbackInbox.searchHere")}
                className="bg-green-900 text-white placeholder-white px-5 py-2 rounded-full focus:outline-none"
              />
              <SlidersHorizontal className="w-6 h-6 text-green-900 cursor-pointer" />
              <div className="relative">
                <Bell className="w-6 h-6 text-green-900 cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  1
                </span>
              </div>
            </div>
          </div>

          {/* Feedback List + Category */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Feedback Cards */}
            <div className="lg:col-span-3 space-y-4">
              {feedbacks.map((fb) => (
                <div
                  key={fb.id}
                  className="bg-green-900 text-white p-6 rounded-3xl shadow-md"
                >
                  <h2 className="text-xl font-semibold">
                    {t("feedbackInbox.student")} {fb.id}
                  </h2>
                  <p className="text-sm">{fb.detail}</p>
                </div>
              ))}
            </div>

            {/* Category Section */}
            <div className="bg-green-900 text-white p-6 rounded-3xl shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                {t("feedbackInbox.category")}
              </h2>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-4 h-4 rounded-full bg-red-500"></span>
                {t("feedbackInbox.high")}
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
                {t("feedbackInbox.mid")}
              </div>
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-green-400"></span>
                {t("feedbackInbox.low")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackInbox;
