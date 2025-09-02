import React from "react";
import { FaUser, FaEnvelope, FaRegComment, FaDiscord, FaClock } from "react-icons/fa";

const ContactSection = () => {
  const contactMethods = [
    { icon: <FaEnvelope className="text-teal-600" />, title: "Email", value: "support@smriti.live" },
    { icon: <FaDiscord className="text-teal-600" />, title: "Discord", value: "discord.gg/xyz" },
    { icon: <FaClock className="text-teal-600" />, title: "Response Time", value: "Within 24 hours" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (Integrate backend here)");
  };

  return (
    <section className="bg-teal-100 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-teal-600 mb-4 text-center">Contact Us</h2>
        <p className="text-teal-700 mb-12 text-center opacity-80">
          Have questions or feedback? We'd love to hear from you.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg mb-12 space-y-4"
        >
          {/* Name */}
          <div className="flex items-center border border-teal-300 rounded-lg p-3 hover:border-teal-500 hover:shadow-md transition duration-300">
            <FaUser className="text-teal-600 mr-3 text-xl" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="flex-1 outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border border-teal-300 rounded-lg p-3 hover:border-teal-500 hover:shadow-md transition duration-300">
            <FaEnvelope className="text-teal-600 mr-3 text-xl" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="flex-1 outline-none"
            />
          </div>

          {/* Message */}
          <div className="flex items-start border border-teal-300 rounded-lg p-3 hover:border-teal-500 hover:shadow-md transition duration-300">
            <FaRegComment className="text-teal-600 mr-3 mt-2 text-xl" />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="flex-1 outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 hover:scale-105 transition duration-300"
          >
            Send Message
          </button>
        </form>

       {/* Other Ways to Reach Us */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
  {contactMethods.map((method, index) => (
    <div
      key={index}
      className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center space-y-2
                 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 
                 hover:shadow-2xl hover:shadow-teal-400/50 hover:border-teal-400 border border-transparent"
    >
      <div className="text-3xl mb-2 transition-transform duration-500 group-hover:rotate-6">
        {method.icon}
      </div>
      <h4 className="text-teal-600 font-bold">{method.title}</h4>
      <p className="text-teal-700">{method.value}</p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default ContactSection;
