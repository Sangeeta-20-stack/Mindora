import React from "react";

const QuickStatsCard = ({ activeStudents, anonymousChats, appointmentsPending }) => {
  return (
    <div className="bg-green-900 text-white p-5 rounded-2xl w-full">
      <h3 className="font-bold text-lg mb-3">Quick Stats Cards:</h3>
      <p>Active Students Today: <b>{activeStudents}</b></p>
      <p>No of Anonymous Chats: <b>{anonymousChats}</b></p>
      <p>Psychologist Appointments Pending: <b>{appointmentsPending}</b></p>
    </div>
  );
};

export default QuickStatsCard;
