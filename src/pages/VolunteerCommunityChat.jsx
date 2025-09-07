// src/pages/VolunteerCommunityChat.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import VolunteerSidebar from "../components/VolunteerSidebar";
import Topbar from "../components/Topbar";
import { Send } from "lucide-react";

const VolunteerCommunityChat = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim() === "") return;
    setMessages([
      ...messages,
      { text: message, time: new Date().toLocaleTimeString() },
    ]);
    setMessage("");
  };

  return (
    <div className="flex min-h-screen bg-[#fdf6e3]">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64">
        <VolunteerSidebar />
      </div>

      {/* Main Section */}
      <div className="ml-64 flex-1 flex flex-col">
        {/* Topbar */}
        <div className="sticky top-0 z-20 bg-[#fdf6e3] shadow">
          <Topbar />
        </div>

        {/* Chat Content */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-green-900 mb-6">
            {t("volunteer.communityChat")}
          </h1>

          <div className="flex gap-6">
            {/* Chat Box */}
            <div className="flex-1 bg-green-900 text-white p-6 rounded-3xl shadow-md flex flex-col justify-between">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                {messages.length === 0 ? (
                  <p className="text-gray-300 text-sm">
                    {t("volunteer.noMessages")}
                  </p>
                ) : (
                  messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className="bg-white text-green-900 p-3 rounded-xl shadow-sm"
                    >
                      <p>{msg.text}</p>
                      <span className="text-xs text-gray-500">{msg.time}</span>
                    </div>
                  ))
                )}
              </div>

              {/* Input Box */}
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("volunteer.typeMessage")}
                  className="flex-1 p-3 rounded-full bg-white text-green-900 outline-none"
                />
                <button
                  onClick={handleSend}
                  className="bg-green-700 p-3 rounded-full hover:bg-green-800 transition"
                >
                  <Send size={20} className="text-white" />
                </button>
              </div>
            </div>

            {/* Side Info Box */}
            <div className="bg-green-900 text-white p-6 rounded-2xl w-64 flex items-center justify-center text-center text-sm">
              {t("volunteer.helpCommunity")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCommunityChat;
