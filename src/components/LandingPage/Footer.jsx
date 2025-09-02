import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaLinkedin />, url: "https://linkedin.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
  ];

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <footer className="bg-teal-600 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand & Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Mindly</h2>
          <p className="mb-2 flex items-center gap-2">
            <FaEnvelope /> info@mindly.com
          </p>
          <p className="mb-4 flex items-center gap-2">
            <FaPhoneAlt /> +123 456 7890
          </p>
          <div className="flex gap-4 text-xl mt-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-200 transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-teal-200 transition-colors duration-300">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Subscription */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <p className="mb-4">Get our latest updates and news.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-3 rounded-lg flex-1 text-gray-900 outline-none"
            />
            <button
              type="submit"
              className="bg-teal-800 text-white px-4 py-3 rounded-lg hover:bg-teal-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="mt-12 text-center text-teal-200">
        &copy; {new Date().getFullYear()} Mindly. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
