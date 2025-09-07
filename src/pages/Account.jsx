// src/pages/Account.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // ✅ i18n hook
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { User, Shield } from "lucide-react";

const Account = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation(); // ✅ translation instance

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      alert(t("account.loginFirst")); // ✅ translated
      navigate("/login");
    } else {
      setUser(storedUser);
    }
  }, [navigate, t]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert(t("account.logoutSuccess")); // ✅ translated
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-[#fdf6e3]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-green-900">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Topbar */}
        <Topbar title={t("account.myAccount")} />

        {/* Account Section */}
        <div className="flex-1 p-8 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-[#fdf6e3] w-full rounded-2xl shadow-xl p-10 border border-green-200"
          >
            <h2 className="text-3xl font-extrabold text-green-900 mb-8 text-center">
              {t("account.details")}
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
                  className="flex items-center gap-4 p-5 rounded-xl shadow-md bg-green-900 text-white"
                >
                  <User className="text-yellow-300 w-7 h-7" />
                  <div>
                    <h3 className="text-sm text-gray-200">{t("account.name")}</h3>
                    <p className="text-lg font-semibold">
                      {user.name || t("account.notProvided")}
                    </p>
                  </div>
                </motion.div>

                {/* Role */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-5 rounded-xl shadow-md bg-green-900 text-white"
                >
                  <Shield className="text-yellow-300 w-7 h-7" />
                  <div>
                    <h3 className="text-sm text-gray-200">{t("account.role")}</h3>
                    <p className="text-lg font-semibold">
                      {user.role || t("account.defaultRole")}
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
                {t("account.logout")}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#14532d" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/dashboard")}
                className="w-full bg-green-900 text-white py-3 rounded-xl font-semibold shadow-md transition"
              >
                {t("account.goDashboard")}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Account;
