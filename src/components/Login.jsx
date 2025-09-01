import React from "react";
import loginImg from "../assets/signup.png"; // 👈 replace with your login image if needed
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No account found. Please sign up first.");
      navigate("/signup");
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      alert("Login successful!");
      navigate("/dashboard"); // redirect to home after login
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex w-[90%] max-w-5xl rounded-3xl shadow-xl overflow-hidden"
      >
        {/* Left Section */}
        <div className="relative w-1/2 bg-gradient-to-r from-teal-600 to-teal-400 p-10 text-white flex flex-col justify-between items-center">
          {/* Floating circles */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-bounce"></div>

          {/* Welcome Text */}
          <motion.h2
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mt-10"
          >
            Welcome back to Mindly!
          </motion.h2>

          {/* Image */}
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
          className="w-1/2 bg-white p-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Log in</h2>

          <form className="flex flex-col gap-5" onSubmit={handleLogin}>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-teal-400 transition"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-teal-400 transition"
              required
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-teal-600 to-teal-400 text-white py-3 rounded-full font-semibold shadow-md transition"
            >
              Log in
            </motion.button>

            <div className="flex items-center my-2">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-3 text-gray-400">Or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <Link
              to="/signup"
              className="w-full text-center bg-gradient-to-r from-purple-400 to-teal-300 py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Create Account
            </Link>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
