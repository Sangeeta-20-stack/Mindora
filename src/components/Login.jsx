// src/pages/Login.jsx
import React, { useState } from "react";
import loginImg from "../assets/signup.png";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // ✅ i18n

const Login = () => {
  const { t } = useTranslation(); // ✅ translation hook
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const password = e.target.password.value.trim();

    if (role === "student") {
      // Anonymous student login
      const name = e.target.name.value.trim();
      const storedAnon = JSON.parse(localStorage.getItem("anonUser"));

      if (!storedAnon) {
        alert(t("login.no_anon_account"));
        navigate("/signup");
        return;
      }

      if (storedAnon.name === name && storedAnon.password === password) {
        alert(t("login.success_student"));
        navigate("/dashboard");
      } else {
        alert(t("login.invalid_anon"));
      }
    } else {
      // Admin / Counsellor / Volunteer login
      const email = e.target.email.value.trim();
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser) {
        alert(t("login.no_account"));
        navigate("/signup");
        return;
      }

      if (
        storedUser.email === email &&
        storedUser.password === password &&
        storedUser.role === role
      ) {
        alert(t("login.success_role", { role }));
        navigate("/dashboard");
      } else {
        alert(t("login.invalid_role"));
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex w-[90%] max-w-5xl rounded-3xl shadow-xl overflow-hidden"
      >
        {/* Left Section */}
        <div className="relative w-1/2 bg-green-900 p-10 text-white flex flex-col justify-between items-center">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-bounce"></div>

          <motion.h2
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mt-10 text-center"
          >
            {t("login.welcome")}
          </motion.h2>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center justify-center flex-1"
          >
            <img
              src={loginImg}
              alt={t("login.alt_img")}
              className="max-h-72 object-contain drop-shadow-xl"
            />
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-1/2 bg-[#fdf6e3] p-12"
        >
          <h2 className="text-3xl font-bold mb-3 text-gray-800 text-center">
            {t("login.title")}
          </h2>
          <p className="text-gray-600 text-center mb-8 text-sm">
            {t("login.subtitle")}
          </p>

          <form className="flex flex-col gap-5" onSubmit={handleLogin}>
            {/* Role Selection */}
            <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full mb-6 p-3 rounded-full bg-[#fffaf0] border border-[#e6ddc5] outline-none focus:ring-2 focus:ring-green-600 transition"
              required
            >
              <option value="">{t("login.select_role")}</option>
              <option value="student">{t("login.roles.student")}</option>
              <option value="counsellor">{t("login.roles.counsellor")}</option>
              <option value="volunteer">{t("login.roles.volunteer")}</option>
              <option value="admin">{t("login.roles.admin")}</option>
            </select>

            {/* Conditional Fields */}
            {role === "student" ? (
              <>
                <input
                  name="name"
                  type="text"
                  placeholder={t("login.anon_name")}
                  className="w-full p-3 rounded-full bg-white/70 border border-green-900/30 text-green-900 
                             placeholder-green-700 outline-none focus:ring-2 focus:ring-green-900 focus:border-green-900 transition"
                  required
                />
                <input
                  name="password"
                  type="password"
                  placeholder={t("login.password")}
                  className="w-full p-3 rounded-full bg-white/70 border border-green-900/30 text-green-900 
                             placeholder-green-700 outline-none focus:ring-2 focus:ring-green-900 focus:border-green-900 transition"
                  required
                />
              </>
            ) : (
              <>
                <input
                  name="email"
                  type="email"
                  placeholder={t("login.email")}
                  className="w-full p-3 rounded-full bg-white/70 border border-green-900/30 text-green-900 
                             placeholder-green-700 outline-none focus:ring-2 focus:ring-green-900 focus:border-green-900 transition"
                  required
                />
                <input
                  name="password"
                  type="password"
                  placeholder={t("login.password")}
                  className="w-full p-3 rounded-full bg-white/70 border border-green-900/30 text-green-900 
                             placeholder-green-700 outline-none focus:ring-2 focus:ring-green-900 focus:border-green-900 transition"
                  required
                />
              </>
            )}

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-green-900 text-white py-3 rounded-full font-semibold shadow-md transition hover:bg-green-800"
            >
              {t("login.submit")}
            </motion.button>

            {/* Link */}
            <p className="text-center text-sm text-gray-700">
              {t("login.no_account")}{" "}
              <Link to="/signup" className="text-green-700 hover:underline">
                {t("login.create")}
              </Link>
            </p>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
