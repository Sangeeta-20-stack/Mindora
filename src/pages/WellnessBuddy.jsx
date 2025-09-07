// src/pages/WellnessBuddy.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const WellnessBuddy = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen bg-[#fdf6e3]">
      {/* Sidebar */}
      <aside className="w-64 bg-green-900 flex-shrink-0 h-screen fixed">
        <Sidebar />
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col ml-64 overflow-y-auto h-screen">
        {/* Topbar */}
        <div className="sticky top-0 z-10">
          <Topbar title={t("wellnessBuddy.title")} />
        </div>

        {/* Chat Section */}
        <main className="p-6 space-y-6">
          <h1 className="text-3xl font-bold text-green-900 mb-6">
            {t("wellnessBuddy.title")}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Chat Box */}
            <div className="col-span-2 bg-green-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
              <div className="mb-4 text-lg font-medium">
                {t("wellnessBuddy.intro")}
              </div>

              {/* Chat history placeholder */}
              <div className="flex-1 bg-green-800 rounded-xl p-3 mb-4 overflow-y-auto">
                <p className="text-gray-200 italic">
                  {t("wellnessBuddy.chatPlaceholder")}
                </p>
              </div>

              {/* Input box */}
              <div className="flex items-center bg-[#fdf6e3] rounded-xl px-3 py-2">
                <input
                  type="text"
                  placeholder={t("wellnessBuddy.inputPlaceholder")}
                  className="flex-1 bg-transparent outline-none text-black"
                />
                <button className="bg-green-700 text-white px-4 py-1 rounded-xl ml-2">
                  ➤
                </button>
              </div>
            </div>

            {/* Side info panel */}
            <div className="bg-green-900 text-white rounded-2xl p-6 shadow-lg flex flex-col justify-center items-center">
              <h2 className="text-xl font-semibold mb-3">
                {t("wellnessBuddy.tipTitle")}
              </h2>
              <p className="text-center text-gray-200">
                {t("wellnessBuddy.tipText")}
                <br />
                <span className="font-medium text-white">
                  {t("wellnessBuddy.tipHighlight")}
                </span>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WellnessBuddy;
