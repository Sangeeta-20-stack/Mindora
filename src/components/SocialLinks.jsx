// src/components/SocialLinks.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const SocialLinks = ({ links }) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center gap-6 mb-12 text-2xl">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t(`social.${link.name}`)} // ✅ translated label
          title={t(`social.${link.name}`)}      // ✅ tooltip in selected language
          className="text-white hover:text-teal-100 transition-colors duration-300"
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
