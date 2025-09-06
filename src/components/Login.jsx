// src/pages/Login.jsx
import React, { useState } from "react";
import loginImg from "../assets/signup.png";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
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
        alert("No anonymous account found. Please sign up first.");
        navigate("/signup");
        return;
      }

      if (storedAnon.name === name && storedAnon.password === password) {
        alert("Anonymous login successful!");
        navigate("/dashboard");
      } else {
        alert("Invalid anonymous credentials!");
      }
    } else {
      // Admin / Counsellor / Volunteer login
      const email = e.target.email.value.trim();
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser) {
        alert("No account found. Please sign up first.");
        navigate("/signup");
        return;
      }

      if (
        storedUser.email === email &&
        storedUser.password === password &&
        storedUser.role === role
      ) {
        alert(`Login successful as ${role}!`);
        navigate("/dashboard");
      } else {
        alert("Invalid credentials or role!");
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
            Welcome back to Vritti!
          </motion.h2>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center justify-center flex-1"
          >
            <img
              src={loginImg}
              alt="Login"
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
            Log in to Your Account
          </h2>
          <p className="text-gray-600 text-center mb-8 text-sm">
            Choose your role and log in securely.
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
              <option value="">Select Role</option>
              <option value="student">Student (Anonymous)</option>
              <option value="counsellor">Counsellor</option>
              <option value="volunteer">Volunteer</option>
              <option value="admin">Admin</option>
            </select>

            {/* Conditional Fields */}
            {role === "student" ? (
              <>
                <input
                  name="name"
                  type="text"
                  placeholder="Anonymous Name"
                  className="w-full p-3 rounded-full bg-white/70 border border-green-900/30 text-green-900 
                             placeholder-green-700 outline-none focus:ring-2 focus:ring-green-900 focus:border-green-900 transition"
                  required
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
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
                  placeholder="Email Address"
                  className="w-full p-3 rounded-full bg-white/70 border border-green-900/30 text-green-900 
                             placeholder-green-700 outline-none focus:ring-2 focus:ring-green-900 focus:border-green-900 transition"
                  required
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
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
              Log in
            </motion.button>

            {/* Link */}
            <p className="text-center text-sm text-gray-700">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-green-700 hover:underline">
                Create one
              </Link>
            </p>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
