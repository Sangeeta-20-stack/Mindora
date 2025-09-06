import React, { useState, useEffect } from "react";

const quotes = [
  { text: "Education is the most powerful weapon to change the world.", author: "Nelson Mandela" },
  { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
  { text: "Success is small efforts repeated daily.", author: "Robert Collier" },
  { text: "Consistency transforms average into excellence.", author: "Anonymous" },
];

const QuotesCard = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-green-900 rounded-2xl shadow-lg p-6 text-white flex flex-col justify-between">
      <p className="italic text-sm">“{quotes[quoteIndex].text}”</p>
      <span className="mt-4 font-bold text-sm self-end">- {quotes[quoteIndex].author}</span>
    </div>
  );
};

export default QuotesCard;
