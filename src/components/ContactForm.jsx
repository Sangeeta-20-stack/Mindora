// src/components/ContactForm.jsx
import React from "react";
import { useTranslation } from "react-i18next"; // ✅ import i18n

const ContactForm = () => {
  const { t } = useTranslation(); // ✅ translation hook

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t("contact.formSubmitted")); // ✅ translated alert
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder={t("contact.name")} // ✅ translated
          required
          className="p-3 border border-teal-300 rounded-lg flex-1 
            focus:outline-none focus:ring-2 focus:ring-teal-500 
            focus:border-teal-500 shadow-sm focus:shadow-lg 
            transition duration-300"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder={t("contact.email")} // ✅ translated
          required
          className="p-3 border border-teal-300 rounded-lg flex-1 
            focus:outline-none focus:ring-2 focus:ring-teal-500 
            focus:border-teal-500 shadow-sm focus:shadow-lg 
            transition duration-300"
        />
      </div>

      {/* Message */}
      <textarea
        name="message"
        rows="4"
        placeholder={t("contact.message")} // ✅ translated
        required
        className="p-3 border border-teal-300 rounded-lg w-full 
          focus:outline-none focus:ring-2 focus:ring-teal-500 
          focus:border-teal-500 shadow-sm focus:shadow-lg 
          transition duration-300"
      ></textarea>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 bg-teal-600 text-white rounded-lg 
          hover:bg-teal-700 hover:shadow-lg 
          transition duration-300"
      >
        {t("contact.send")} {/* ✅ translated */}
      </button>
    </form>
  );
};

export default ContactForm;
