import React from "react";

const BadgeCard = ({ badge }) => {
  return (
    <div className="bg-green-900 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-white">
      <div className="text-5xl">{badge.emoji}</div>
      <h3 className="mt-3 font-bold text-lg">{badge.title}</h3>
      <p className="mt-1 text-sm">{badge.desc}</p>
    </div>
  );
};

export default BadgeCard;
