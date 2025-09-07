// src/pages/Signup.jsx
import React, { useState } from "react";
import signupImg from "../assets/signup.png";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");

  const handleSignup = (e) => {
    e.preventDefault();

    const password = e.target.password.value.trim();
    const confirm = e.target.confirm.value.trim();

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    let newUser = null;

    if (role === "student") {
      const name = e.target.name.value.trim();
      if (!name) {
        alert("Please enter an anonymous name!");
        return;
      }

      newUser = {
        role,
        name,
        password,
        status: "approved",
      };
    } else {
      const fullname = e.target.fullname.value.trim();
      const email = e.target.email.value.trim();

      if (!fullname || !email) {
        alert("Please fill all fields!");
        return;
      }

      newUser = {
        role,
        fullname,
        email,
        password,
        status: "pending",
      };
    }

    const existing = JSON.parse(localStorage.getItem("users")) || [];
    existing.push(newUser);
    localStorage.setItem("users", JSON.stringify(existing));

    alert(
      role === "student"
        ? "Anonymous account created successfully!"
        : "Signup successful! Awaiting admin approval."
    );

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-[#FDFBF7] dark:bg-gray-950 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex w-[90%] max-w-5xl rounded-3xl shadow-xl overflow-hidden 
                   bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        {/* Left Section */}
        <div className="relative w-1/2 bg-green-900 dark:bg-green-800 
                        p-10 text-white flex flex-col justify-between items-center">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-bounce"></div>

          <motion.h2
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mt-10 text-center"
          >
            Welcome to Vritti!
          </motion.h2>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center justify-center flex-1"
          >
            <img
              src={signupImg}
              alt="Signup"
              className="max-h-72 object-contain drop-shadow-xl"
            />
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-1/2 bg-[#fdf6e3] dark:bg-gray-800 p-12 overflow-y-auto 
                     transition-colors duration-300"
        >
          <h2 className="text-3xl font-bold mb-3 text-gray-800 dark:text-gray-100 text-center">
            {role === "student"
              ? "Create Anonymous Account"
              : `Sign up as ${role.charAt(0).toUpperCase() + role.slice(1)}`}
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-center mb-8 text-sm">
            {role === "student"
              ? "Start your wellness journey with complete privacy."
              : "Provide your details to join as " + role + "."}
          </p>

          {/* Role Selector */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full mb-6 p-3 rounded-full 
                       bg-gray-100 dark:bg-gray-700 
                       text-gray-800 dark:text-gray-100 
                       border border-gray-300 dark:border-gray-600 
                       outline-none focus:ring-2 focus:ring-green-600 transition"
          >
            <option value="student">Student (Anonymous)</option>
            <option value="counsellor">Counsellor</option>
            <option value="volunteer">Volunteer</option>
            <option value="admin">Admin</option>
          </select>

          {/* Form */}
          <form className="flex flex-col gap-5" onSubmit={handleSignup}>
            {role === "student" ? (
              <input
                name="name"
                type="text"
                placeholder="e.g., PeacefulMind, CalmStudent"
                className="w-full p-3 rounded-full 
                           bg-gray-100 dark:bg-gray-700 
                           text-gray-800 dark:text-gray-100 
                           border border-gray-300 dark:border-gray-600 
                           outline-none focus:ring-2 focus:ring-green-600 transition"
                required
              />
            ) : (
              <>
                <input
                  name="fullname"
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 rounded-full 
                             bg-gray-100 dark:bg-gray-700 
                             text-gray-800 dark:text-gray-100 
                             border border-gray-300 dark:border-gray-600 
                             outline-none focus:ring-2 focus:ring-green-600 transition"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 rounded-full 
                             bg-gray-100 dark:bg-gray-700 
                             text-gray-800 dark:text-gray-100 
                             border border-gray-300 dark:border-gray-600 
                             outline-none focus:ring-2 focus:ring-green-600 transition"
                  required
                />
              </>
            )}

            {/* Passwords */}
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-full 
                         bg-gray-100 dark:bg-gray-700 
                         text-gray-800 dark:text-gray-100 
                         border border-gray-300 dark:border-gray-600 
                         outline-none focus:ring-2 focus:ring-green-600 transition"
              required
            />
            <input
              name="confirm"
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded-full 
                         bg-gray-100 dark:bg-gray-700 
                         text-gray-800 dark:text-gray-100 
                         border border-gray-300 dark:border-gray-600 
                         outline-none focus:ring-2 focus:ring-green-600 transition"
              required
            />

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-green-900 hover:bg-green-800 
                         text-white py-3 rounded-full font-semibold shadow-md transition"
            >
              {role === "student" ? "Create Anonymous Account" : "Sign Up"}
            </motion.button>

            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-green-700 dark:text-green-400 hover:underline"
              >
                Log in
              </Link>
            </p>
          </form>

          {/* Privacy Info (only for students) */}
          {role === "student" && (
            <div className="mt-8 p-5 rounded-xl 
                            bg-[#F6F3EB] dark:bg-gray-700 
                            border border-[#E6E1D8] dark:border-gray-600 
                            transition-colors duration-300">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="text-green-700 dark:text-green-400" size={20} />
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                  Your Privacy is Protected
                </h3>
              </div>
              <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>No real name or email required</li>
                <li>Anonymous name + password for login</li>
                <li>All data stored anonymously</li>
                <li>You control your information</li>
                <li>Delete account anytime</li>
              </ul>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Signup;
