import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";

export default function HeroSection() {
  return (
    <section className="bg-teal-400 flex flex-col items-center justify-center text-center px-6 py-16 min-h-screen text-white pt-32 md:pt-40 overflow-hidden">
      {/* Headings */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold mb-2 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
      >
        Mind ko Heal Karo,
        <br /> Future ko seal karo.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-2xl max-w-2xl leading-relaxed opacity-90"
      >
        Nurturing Mental Wellness Every Day
      </motion.p>

      {/* Hero Image with 3D animation */}
      <div className="mt-10 flex justify-center" style={{ perspective: 1200 }}>
        <motion.img
          src={hero}
          alt="Hero"
          className="w-full max-w-lg md:max-w-xl lg:max-w-2xl rounded-2xl shadow-2xl object-cover"
          initial={{ rotateX: 0, rotateY: 0, scale: 0.95, opacity: 0 }}
          animate={{ rotateX: 8, rotateY: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 70 }}
          whileHover={{ rotateX: 0, rotateY: 5, scale: 1.05, boxShadow: "0px 8px 25px rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.98 }}
        />
      </div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12 flex gap-6"
      >
        <motion.button
          whileHover={{ scale: 1.08, boxShadow: "0px 6px 20px rgba(255,255,255,0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-teal-500 px-8 py-3 rounded-full shadow-md font-extrabold transition"
        >
          Get Started →
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.08, backgroundColor: "#ffffff", color: "#14b8a6" }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-white px-8 py-3 rounded-full font-extrabold transition"
        >
          Learn More
        </motion.button>
      </motion.div>
    </section>
  );
}
