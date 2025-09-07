import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import Topbar from "../components/Topbar";
import { useTranslation } from "react-i18next";

const ManageResources = () => {
  const { t } = useTranslation();

  const doctors = [
    { name: "Dr. Adams", appointments: 12 },
    { name: "Dr. Eve", appointments: 12 },
  ];

  return (
    <div className="flex min-h-screen bg-[#fdf6e3]">
      {/* Sidebar fixed */}
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
          {/* Heading */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-green-900">
              {t("manageResources.title")}
            </h1>

            {/* Add New Button */}
            <button className="bg-green-900 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-green-800 transition">
              <span className="text-xl">+</span> {t("manageResources.addNew")}
            </button>
          </div>

          {/* Doctor Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doc, index) => (
              <div
                key={index}
                className="bg-green-900 text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between"
              >
                {/* Top Section */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5.121 17.804A9 9 0 1118.879 6.196M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>

                  {/* Name */}
                  <h2 className="text-xl font-semibold">{doc.name}</h2>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button className="relative bg-white text-green-900 px-5 py-2 rounded-full font-medium hover:bg-green-100 transition">
                    {t("manageResources.appointments")}
                    {doc.appointments > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        +{doc.appointments}
                      </span>
                    )}
                  </button>

                  <button className="bg-white text-green-900 px-5 py-2 rounded-full font-medium hover:bg-green-100 transition">
                    {t("manageResources.manage")}
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

export default ManageResources;
