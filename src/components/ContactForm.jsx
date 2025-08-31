import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (You can integrate a backend here)");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 border border-teal-300 rounded-lg flex-1 
            focus:outline-none focus:ring-2 focus:ring-teal-500 
            focus:border-teal-500 shadow-sm focus:shadow-lg 
            transition duration-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 border border-teal-300 rounded-lg flex-1 
            focus:outline-none focus:ring-2 focus:ring-teal-500 
            focus:border-teal-500 shadow-sm focus:shadow-lg 
            transition duration-300"
        />
      </div>
      <textarea
        name="message"
        rows="4"
        placeholder="Your Message"
        required
        className="p-3 border border-teal-300 rounded-lg w-full 
          focus:outline-none focus:ring-2 focus:ring-teal-500 
          focus:border-teal-500 shadow-sm focus:shadow-lg 
          transition duration-300"
      ></textarea>
      <button
        type="submit"
        className="w-full py-3 bg-teal-600 text-white rounded-lg 
          hover:bg-teal-700 hover:shadow-lg 
          transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
