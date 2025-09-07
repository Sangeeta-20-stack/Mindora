// src/components/QuotesCard.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const QuotesCard = () => {
  const { t } = useTranslation();

  // quotes come from translation JSON
  const quotes = [
    { text: t("quotes.0.text"), author: t("quotes.0.author") },
    { text: t("quotes.1.text"), author: t("quotes.1.author") },
    { text: t("quotes.2.text"), author: t("quotes.2.author") },
    { text: t("quotes.3.text"), author: t("quotes.3.author") },
    { text: t("quotes.4.text"), author: t("quotes.4.author") },
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 10000); // 10s interval
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div
      className="
        bg-green-900 text-white
        dark:bg-gray-800 dark:text-gray-100
        rounded-2xl shadow-lg p-6 flex flex-col justify-between
        transition-colors duration-300
      "
    >
      <p className="italic text-sm">“{quotes[quoteIndex].text}”</p>
      <span className="mt-4 font-bold text-sm self-end">
        - {quotes[quoteIndex].author}
      </span>
    </div>
  );
};

export default QuotesCard;
