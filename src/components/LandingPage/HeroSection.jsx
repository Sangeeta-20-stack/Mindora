import { motion } from "framer-motion";
import hero from "../../assets/hero.jpg"; // replace with your Canva illustration

export default function HeroSection() {
  return (
    <section className="bg-[#f7f6d5] flex flex-col md:flex-row items-center justify-between 
                        px-6 md:px-16 lg:px-24 py-16 min-h-screen overflow-hidden 
                        md:gap-x-16 lg:gap-x-24">

      {/* Left Side - Illustration */}
      <motion.div
        initial={{ opacity: 0, x: -80, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.05, rotate: 1 }}
        className="flex-1 flex justify-center mb-10 md:mb-0 cursor-pointer"
      >
        <motion.img
          src={hero}
          alt="Hero Illustration"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left"
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-6"
          style={{
            color: "#144d25", // Canva dark green
            lineHeight: "1.1", // tight line spacing
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.02, color: "#0f3a1b" }}
        >
          Nurturing Minds,<br /> Building Future
        </motion.h1>

        {/* Subtext */}
        <motion.h2
          className="text-lg text-[#144d25] mb-12 leading-relaxed max-w-md mx-auto md:mx-0"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ scale: 1.01 }}
        >
          A safe, stigma-free space <br />
          where institutions and individuals unite <br />
          for holistic mental well-being.
        </motion.h2>
      </motion.div>
    </section>
  );
}
