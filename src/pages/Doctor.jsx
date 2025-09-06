// src/pages/Doctor.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Phone,
  Video,
  Calendar,
  XCircle,
  User,
} from "lucide-react";

const Doctor = () => {
  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem("appointments")) || []
  );

  const doctors = [
    {
      id: 1,
      name: "Mr. Psychologist",
      specialization: "Stress management, Student Counseling",
      qualification: "MSc, M.Phil",
      availability: "Online now / Next Slot: 5 PM",
    },
    {
      id: 2,
      name: "Dr. Psychologist X",
      specialization: "Dean of Student Affairs, TMSL",
      qualification: "PhD",
      availability: "Next Slot: Friday at 5 PM",
    },
    {
      id: 3,
      name: "Mr. Psychologist X",
      specialization: "Counseling Expert",
      qualification: "MSc (CAL)",
      availability: "Online now",
    },
  ];

  const handleBook = (doctor) => {
    const date = prompt("Enter appointment date (e.g. 2025-09-10):");
    const time = prompt("Enter time (e.g. 4:30 PM):");
    const mode = prompt("Enter mode (Chat / Voice / Video):");

    if (!date || !time || !mode) return alert("Please fill all details!");

    const newAppt = {
      id: Date.now(),
      doctor: doctor.name,
      specialization: doctor.specialization,
      date,
      time,
      mode,
    };

    const updated = [...appointments, newAppt];
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  };

  const handleCancel = (id) => {
    const updated = appointments.filter((appt) => appt.id !== id);
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  };

  return (
    <div className="flex min-h-screen bg-[#fdf6e3]">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-green-900">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        <Topbar title="Appointment" />

        <div className="flex flex-1 p-8 gap-8 overflow-y-auto">
          {/* Left: Doctor list */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-green-900 mb-8">
              Hello, User
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {doctors.map((doc) => (
                <motion.div
                  key={doc.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-green-900 text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white p-3 rounded-full">
                      <User className="text-green-900" size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{doc.name}</h3>
                      <p className="text-sm opacity-90">{doc.qualification}</p>
                      <p className="text-sm italic">{doc.specialization}</p>
                    </div>
                  </div>

                  <p className="text-sm mb-4 opacity-90">
                    Availability: {doc.availability}
                  </p>

                  <button
                    onClick={() => handleBook(doc)}
                    className="mt-auto bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 transition"
                  >
                    Book Session
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: My Sessions + Modes of Connect */}
          <div className="w-80 flex flex-col gap-6">
            {/* My Sessions */}
            <div className="bg-green-900 text-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-bold mb-4">My Sessions</h2>
              {appointments.length > 0 ? (
                appointments.map((appt) => (
                  <div
                    key={appt.id}
                    className="mb-4 p-3 rounded-lg bg-green-800 flex flex-col gap-1"
                  >
                    <p className="font-semibold">{appt.date}</p>
                    <p className="text-sm">
                      {appt.doctor} — {appt.time}
                    </p>
                    <p className="text-xs italic">Mode: {appt.mode}</p>
                    <button
                      onClick={() => handleCancel(appt.id)}
                      className="mt-2 text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-200 text-sm">
                  No active sessions scheduled.
                </p>
              )}
            </div>

            {/* Modes of Connect */}
            <div className="bg-green-900 text-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-bold mb-4">Modes of Connect</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <MessageSquare /> Chat
                </li>
                <li className="flex items-center gap-3">
                  <Video /> Video Call
                </li>
                <li className="flex items-center gap-3">
                  <Phone /> Voice Call
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
