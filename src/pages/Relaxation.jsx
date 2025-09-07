// src/pages/Relaxation.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Relaxation = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen bg-[#fdf6e3]">
      {/* Sidebar */}
      <aside className="w-64 bg-green-900 fixed h-screen">
        <Sidebar />
      </aside>

      {/* Main content */}
      <div className="flex-1 ml-64 overflow-y-auto h-screen">
        <Topbar title={t("relaxation.title")} />

        <main className="p-6 space-y-10">
          <h1 className="text-3xl font-bold text-green-900">{t("relaxation.title")}</h1>

          {/* 1. Motivational Videos */}
          <section>
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              🎥 {t("relaxation.videos")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <iframe
                className="w-full h-64 rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/ZXsQAXx_ao0"
                title={t("relaxation.video1")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="w-full h-64 rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/UNQhuFL6CWg"
                title={t("relaxation.video2")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          {/* 2. Relaxing Songs */}
          <section>
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              🎵 {t("relaxation.songs")}
            </h2>
            <div className="flex flex-col gap-4">
              <audio controls src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" className="w-full" />
              <audio controls src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" className="w-full" />
            </div>
          </section>

          {/* 3. Breathing & Meditation Exercises */}
          <section>
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              🧘 {t("relaxation.breathing")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <iframe
                className="w-full h-64 rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/cEqZthCaMpo"
                title={t("relaxation.breathing1")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="w-full h-64 rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/inpok4MKVLM"
                title={t("relaxation.breathing2")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Relaxation;
