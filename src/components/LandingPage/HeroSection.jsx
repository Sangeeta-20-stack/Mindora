import { motion } from "framer-motion";
import hero from "../../assets/hero.png"; // replace with your Canva illustration

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
        whileHover={{ scale: 1.08, rotate: 2 }}
        className="flex-1 flex justify-center items-center cursor-pointer"
      >
        <motion.img
          src={hero}
          alt="Hero Illustration"
          className="w-full max-w-lg md:max-w-xl lg:max-w-3xl object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          whileHover={{ scale: 1.1, rotate: -2 }}
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex flex-col justify-center text-center md:text-left"
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
          style={{
            color: "#144d25", // Canva dark green
            lineHeight: "1.1",
          }}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
          whileHover={{
            scale: 1.05,
            color: "#0f3a1b",
            transition: { yoyo: Infinity, duration: 0.4 },
          }}
        >
          Nurturing Minds,<br /> Building Future
        </motion.h1>

        {/* Subtext */}
        <motion.h2
          className="text-lg text-[#144d25] mb-12 leading-relaxed max-w-md mx-auto md:mx-0"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{
            scale: 1.02,
            textShadow: "0px 0px 8px rgba(20,77,37,0.6)",
          }}
        >
          A safe, stigma-free space <br />
          where institutions and individuals unite <br />
          for holistic mental well-being.
        </motion.h2>
      </motion.div>
    </section>
  );
}
