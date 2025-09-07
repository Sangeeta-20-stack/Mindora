import React from "react";
import {
  LayoutDashboard,
  BarChart3,
  MessageSquare,
  Shield,
  Inbox,
  BookOpen,
} from "lucide-react";

const AdminSidebar = () => {
  return (
    <aside className="bg-green-900 text-white w-64 min-h-screen p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-6">VRITTI</h1>

      <nav className="flex flex-col gap-4">
        <button className="flex items-center gap-3 bg-green-600 px-3 py-2 rounded-lg">
          <LayoutDashboard size={20} /> Dashboard
        </button>
        <button className="flex items-center gap-3 hover:text-green-400">
          <BookOpen size={20} /> Manage Resources
        </button>
        <button className="flex items-center gap-3 hover:text-green-400">
          <BarChart3 size={20} /> Analytics
        </button>
        <button className="flex items-center gap-3 hover:text-green-400">
          <MessageSquare size={20} /> Community Contribution
        </button>
        <button className="flex items-center gap-3 hover:text-green-400">
          <Shield size={20} /> Forum Moderation
        </button>
        <button className="flex items-center gap-3 hover:text-green-400">
          <Inbox size={20} /> Feedback Inbox
        </button>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
