// src/pages/Feedback.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { MessageSquare, Star, Send } from "lucide-react";

const Feedback = () => {
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!comment.trim()) {
      alert("Please enter your feedback before submitting.");
      return;
    }

    const newFeedback = {
      id: Date.now(),
      rating,
      comment,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    const existing = JSON.parse(localStorage.getItem("feedbacks")) || [];
    existing.push(newFeedback);
    localStorage.setItem("feedbacks", JSON.stringify(existing));

    setSubmitted(true);
    setComment("");
    setRating(0);

    setTimeout(() => {
      setSubmitted(false);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="flex h-screen bg-[#f7f6d5]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden ml-64">
        {/* Topbar */}
        <Topbar />

        {/* Page Content */}
        <div className="flex-1 p-10 overflow-y-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-green-900 mb-10 flex items-center gap-3"
          >
            💬 Share Your Feedback
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg rounded-2xl p-10 border border-green-200 w-full max-w-3xl mx-auto"
          >
            {submitted ? (
              <motion.p
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center text-2xl font-semibold text-green-900"
              >
                ✅ Thank you for your valuable feedback!
              </motion.p>
            ) : (
              <div className="space-y-8">
                {/* Rating */}
                <div>
                  <label className="flex items-center text-lg font-semibold mb-2 text-gray-700 gap-2">
                    <Star className="text-yellow-500" size={22} />
                    Rate Your Experience
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        key={star}
                        onClick={() => setRating(star)}
                        className={`text-3xl transition ${
                          rating >= star ? "text-yellow-400" : "text-gray-300"
                        }`}
                      >
                        ★
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <div>
                  <label className="flex items-center text-lg font-semibold mb-2 text-gray-700 gap-2">
                    <MessageSquare className="text-green-900" size={22} />
                    Your Feedback
                  </label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your thoughts, suggestions, or issues here..."
                    rows={6}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-700 outline-none bg-gray-50"
                  />
                </div>

                {/* Submit */}
                <div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSubmit}
                    className="w-full bg-green-900 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition flex items-center justify-center gap-2 text-lg"
                  >
                    <Send size={22} /> Submit Feedback
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
