// src/pages/WellnessBuddy.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const WellnessBuddy = () => {
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
          <Topbar />
        </div>

        {/* Chat Section */}
        <main className="p-6 space-y-6">
          <h1 className="text-3xl font-bold text-green-900 mb-6">
            Wellness Buddy
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Chat Box */}
            <div className="col-span-2 bg-green-900 text-white rounded-2xl p-6 shadow-lg flex flex-col">
              <div className="mb-4 text-lg font-medium">
                Hi! I’m your Wellness Buddy chatbot. How can I support you today?
              </div>

              {/* Chat history placeholder */}
              <div className="flex-1 bg-green-800 rounded-xl p-3 mb-4 overflow-y-auto">
                <p className="text-gray-200 italic">
                  Your conversation with Wellness Buddy will appear here...
                </p>
              </div>

              {/* Input box */}
              <div className="flex items-center bg-[#fdf6e3] rounded-xl px-3 py-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent outline-none text-black"
                />
                <button className="bg-green-700 text-white px-4 py-1 rounded-xl ml-2">
                  ➤
                </button>
              </div>
            </div>

            {/* Side info panel */}
            <div className="bg-green-900 text-white rounded-2xl p-6 shadow-lg flex flex-col justify-center items-center">
              <h2 className="text-xl font-semibold mb-3">Tip of the Day</h2>
              <p className="text-center text-gray-200">
                Take a deep breath and remind yourself: <br />
                <span className="font-medium text-white">
                  “I am stronger than my challenges.”
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
