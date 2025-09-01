import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { User, Mail, Shield } from "lucide-react";

const Account = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      alert("Please log in first.");
      navigate("/login");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar title="My Account" />

        {/* Account Details */}
        <div className="flex-1 p-8 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white w-full rounded-2xl shadow-xl p-10 border border-teal-100"
          >
            <h2 className="text-3xl font-extrabold text-teal-800 mb-8 text-center">
              Account Details
            </h2>

            {user && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex flex-col gap-6"
              >
                {/* Name */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 shadow-sm bg-gradient-to-r from-teal-50 to-teal-100"
                >
                  <User className="text-teal-600 w-7 h-7" />
                  <div>
                    <h3 className="text-sm text-gray-500">Name</h3>
                    <p className="text-lg font-semibold text-gray-800">
                      {user.name || "Not provided"}
                    </p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 shadow-sm bg-gradient-to-r from-purple-50 to-purple-100"
                >
                  <Mail className="text-purple-600 w-7 h-7" />
                  <div>
                    <h3 className="text-sm text-gray-500">Email</h3>
                    <p className="text-lg font-semibold text-gray-800">
                      {user.email}
                    </p>
                  </div>
                </motion.div>

                {/* Role */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 shadow-sm bg-gradient-to-r from-pink-50 to-pink-100"
                >
                  <Shield className="text-pink-600 w-7 h-7" />
                  <div>
                    <h3 className="text-sm text-gray-500">Role</h3>
                    <p className="text-lg font-semibold text-gray-800">
                      {user.role || "User"}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#dc2626" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold shadow-md transition"
              >
                Log Out
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#0f766e" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/dashboard")}
                className="w-full bg-teal-600 text-white py-3 rounded-xl font-semibold shadow-md transition"
              >
                Go to Dashboard
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Account;
