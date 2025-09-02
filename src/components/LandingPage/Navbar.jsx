import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const links = ["Home", "About", "Features", "Contact"];
  const [activeLink, setActiveLink] = useState("Home");
  const location = useLocation();

  // Update active link based on scroll (only on homepage "/")
  useEffect(() => {
    if (location.pathname !== "/") return;

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
  }, [location.pathname]);

  // Smooth scroll handler
  const handleSmoothScroll = (e, id) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const section = document.getElementById(id);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80, // adjust for navbar height
          behavior: "smooth",
        });
      }
    }
  };

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
        className="text-2xl font-bold text-white cursor-pointer"
        onClick={(e) => handleSmoothScroll(e, "home")}
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
              href={`/#${link.toLowerCase()}`}
              onClick={(e) => handleSmoothScroll(e, link.toLowerCase())}
              className={`transition hover:text-gray-200 ${
                activeLink === link && location.pathname === "/"
                  ? "font-bold underline"
                  : ""
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
        {/* Login button */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/login"
            className="border-2 border-white text-white px-5 py-2 rounded-full font-bold hover:bg-white hover:text-teal-600 transition"
          >
            Login
          </Link>
        </motion.div>

        {/* Signup button */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/signup"
            className="bg-white text-teal-600 px-5 py-2 rounded-full font-bold hover:bg-gray-100 transition"
          >
            Sign up
          </Link>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
