// AdminTopbar.jsx
import React, { useState } from "react";

const AdminTopbar = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <header className="bg-[#f8f7e8] flex justify-between items-center px-6 py-3 border-b">
      <h2 className="text-xl font-bold">Welcome, Mr.X</h2>

      {/* Simple Toggle */}
      <button
        onClick={() => setEnabled(!enabled)}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
          enabled ? "bg-green-600" : "bg-gray-400"
        }`}
      >
        <span
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
            enabled ? "translate-x-6" : ""
          }`}
        />
      </button>
    </header>
  );
};

export default AdminTopbar;
