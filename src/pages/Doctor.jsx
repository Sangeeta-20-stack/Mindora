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
      name: "Dr. Neha Singh",
      specialization: "Clinical Psychologist",
      experience: "10+ years",
    },
    {
      id: 2,
      name: "Dr. Arjun Mehta",
      specialization: "Counseling Psychologist",
      experience: "8 years",
    },
    {
      id: 3,
      name: "Dr. Priya Sharma",
      specialization: "Child Psychologist",
      experience: "6 years",
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
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <Topbar />

        {/* Page Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-4xl font-bold text-teal-700 mb-8">
            🧠 Find Your Psychologist
          </h1>

          {/* Doctor List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {doctors.map((doc) => (
              <motion.div
                key={doc.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="bg-teal-100 p-4 rounded-full">
                    <User className="text-teal-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-700">
                      {doc.name}
                    </h3>
                    <p className="text-gray-600">{doc.specialization}</p>
                    <p className="text-sm text-gray-500">
                      {doc.experience} experience
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 px-3 py-2 bg-gray-50 border rounded-lg hover:bg-teal-50 transition">
                    <MessageSquare size={18} className="text-teal-600" /> Chat
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 bg-gray-50 border rounded-lg hover:bg-teal-50 transition">
                    <Phone size={18} className="text-teal-600" /> Voice
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 bg-gray-50 border rounded-lg hover:bg-teal-50 transition">
                    <Video size={18} className="text-teal-600" /> Video
                  </button>
                  <button
                    onClick={() => handleBook(doc)}
                    className="flex items-center gap-2 px-3 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
                  >
                    <Calendar size={18} /> Book
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* My Appointments */}
          <h2 className="text-3xl font-bold text-teal-700 mb-6 flex items-center gap-2">
            <Calendar size={28} className="text-teal-600" />
            My Appointments
          </h2>
          <div className="grid gap-5">
            {appointments.length > 0 ? (
              appointments.map((appt) => (
                <motion.div
                  key={appt.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border flex justify-between items-center hover:shadow-xl transition"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-teal-700">
                      {appt.doctor}
                    </h3>
                    <p className="text-gray-600">{appt.specialization}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {appt.date} at {appt.time} —{" "}
                      <span className="font-medium text-teal-600">
                        {appt.mode}
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={() => handleCancel(appt.id)}
                    className="flex items-center gap-2 px-3 py-2 bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 transition"
                  >
                    <XCircle size={18} /> Cancel
                  </button>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 text-center italic">
                No appointments scheduled yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
