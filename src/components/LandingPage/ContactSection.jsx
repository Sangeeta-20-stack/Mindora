import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (Integrate backend here)");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#f7f6d5] py-16 px-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full border-2 border-[#144d25] rounded-2xl p-6 md:p-12 bg-[#f7f6d5] shadow-md relative overflow-hidden"
      >
        {/* Reflection / glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent rounded-2xl pointer-events-none"></div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#144d25] mb-10 text-center font-serif"
        >
          Contact Us
        </motion.h2>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Name */}
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0 8px 20px rgba(20,77,37,0.3)" }}
            className="flex items-center border-2 border-[#144d25] rounded-xl px-4 py-3 transition-all duration-300"
          >
            <FaUser className="text-[#144d25] mr-4 text-3xl" />
            <input
              type="text"
              name="name"
              placeholder="YOUR NAME"
              required
              className="flex-1 outline-none bg-transparent text-center tracking-[0.3em] uppercase"
            />
          </motion.div>

          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0 8px 20px rgba(20,77,37,0.3)" }}
            className="flex items-center border-2 border-[#144d25] rounded-xl px-4 py-3 transition-all duration-300"
          >
            <FaEnvelope className="text-[#144d25] mr-4 text-3xl" />
            <input
              type="email"
              name="email"
              placeholder="YOUR EMAIL"
              required
              className="flex-1 outline-none bg-transparent text-center tracking-[0.3em] uppercase"
            />
          </motion.div>

          {/* Message */}
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0 8px 20px rgba(20,77,37,0.3)" }}
            className="flex items-start border-2 border-[#144d25] rounded-xl px-4 py-3 transition-all duration-300"
          >
            <textarea
              name="message"
              rows="4"
              placeholder="YOUR MESSAGE"
              required
              className="flex-1 outline-none bg-transparent text-center tracking-[0.3em] resize-none uppercase"
            ></textarea>
          </motion.div>

          {/* Button */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center">
            <button
              type="submit"
              className="px-12 py-2 bg-[#144d25] text-white rounded-full font-semibold hover:bg-[#0f3a1b] transition-all duration-300"
            >
              SEND
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
