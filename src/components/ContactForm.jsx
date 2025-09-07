// src/components/ContactForm.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t("contact.formSubmitted"));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder={t("contact.name")}
          required
          className="p-3 border border-teal-300 dark:border-teal-700 rounded-lg flex-1 
            bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
            focus:outline-none focus:ring-2 focus:ring-teal-500 
            focus:border-teal-500 shadow-sm focus:shadow-lg 
            transition duration-300"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder={t("contact.email")}
          required
          className="p-3 border border-teal-300 dark:border-teal-700 rounded-lg flex-1 
            bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
            focus:outline-none focus:ring-2 focus:ring-teal-500 
            focus:border-teal-500 shadow-sm focus:shadow-lg 
            transition duration-300"
        />
      </div>

      {/* Message */}
      <textarea
        name="message"
        rows="4"
        placeholder={t("contact.message")}
        required
        className="p-3 border border-teal-300 dark:border-teal-700 rounded-lg w-full 
          bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
          focus:outline-none focus:ring-2 focus:ring-teal-500 
          focus:border-teal-500 shadow-sm focus:shadow-lg 
          transition duration-300"
      ></textarea>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 bg-teal-600 text-white rounded-lg 
          hover:bg-teal-700 hover:shadow-lg 
          dark:bg-teal-500 dark:hover:bg-teal-600
          transition duration-300"
      >
        {t("contact.send")}
      </button>
    </form>
  );
};

export default ContactForm;
