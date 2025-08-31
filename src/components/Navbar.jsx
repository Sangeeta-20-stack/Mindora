import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const links = ["Home", "About", "Features", "Contact"];
  const [activeLink, setActiveLink] = useState("Home");

  // Update active link based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // offset for navbar height
      links.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActiveLink(link);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex justify-between items-center bg-teal-500 px-12 py-4 shadow-md fixed w-full top-0 z-50"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
        className="text-2xl font-bold text-white"
      >
        Mindly
      </motion.div>

      {/* Nav Links */}
      <ul className="flex gap-8 text-white font-medium">
        {links.map((link, index) => (
          <motion.li
            key={link}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
          >
            <a
              href={`#${link.toLowerCase()}`} // scrolls to section with id
              className={`transition hover:text-gray-200 ${
                activeLink === link ? "font-bold underline" : ""
              }`}
            >
              {link}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Login & Sign up */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <a
          href="#"
          className="font-bold text-white hover:text-gray-200 transition"
        >
          Login
        </a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="bg-white text-teal-600 px-5 py-2 rounded-full font-bold hover:bg-gray-100 transition"
        >
          Sign up
        </motion.a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
