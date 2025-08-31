import React from "react";

const SocialLinks = ({ links }) => {
  return (
    <div className="flex justify-center gap-6 mb-12 text-2xl">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-teal-100 transition-colors duration-300"
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
