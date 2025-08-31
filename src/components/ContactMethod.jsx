import React from "react";

const ContactMethod = ({ title, description, link }) => {
  return (
    <div
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl 
                 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
    >
      <h3 className="text-xl font-bold text-teal-600 mb-2">{title}</h3>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-800 font-medium hover:text-teal-600 hover:underline transition-colors duration-300"
      >
        {description}
      </a>
    </div>
  );
};

export default ContactMethod;
