import { useState } from "react";
import StatCard from "./StatCard";
import ConfidenceChart from "../charts/ConfidenceChart";
import RiskChart from "../charts/RiskChart";
import RecentDecisions from "./RecentDecisions";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="space-y-12">
      <section id="dashboard">
        <h1 className="text-4xl font-bold text-white mb-8">
          Decision Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard title="Active Decisions" value="18" color="text-indigo-600" />
          <StatCard title="Completed" value="42" color="text-green-600" />
          <StatCard title="Pending" value="9" color="text-yellow-500" />
          <StatCard title="Avg Confidence" value="91%" color="text-blue-600" />
        </div>
      </section>

      <section id="analytics">
        <h2 className="text-2xl font-semibold text-white mb-6">Analytics</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ConfidenceChart />
          <RiskChart />
        </div>
      </section>

      <section id="recent">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Recent Decisions
        </h2>
        <RecentDecisions />
      </section>

      <section
        id="settings"
        className="bg-slate-800 rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="bg-slate-900 rounded-xl p-5 cursor-pointer"
          >
            <h3 className="text-white font-semibold">Appearance</h3>
            <p className="text-slate-300">
              {darkMode ? "🌙 Dark Theme Enabled" : "☀️ Light Theme Enabled"}
            </p>
          </div>

          <div
            onClick={() => setNotifications(!notifications)}
            className="bg-slate-900 rounded-xl p-5 cursor-pointer"
          >
            <h3 className="text-white font-semibold">Notifications</h3>
            <p className="text-slate-300">
              {notifications ? "🔔 Enabled" : "🔕 Disabled"}
            </p>
          </div>
        </div>
      </section>

      <section
        id="profile"
        className="bg-slate-800 rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Profile</h2>

        <div className="flex items-center gap-6">
          <img
            src="https://i.pravatar.cc/120"
            className="rounded-full border-4 border-indigo-500"
          />

          <div>
            <h3 className="text-2xl text-white font-bold">
              Product Manager
            </h3>
            <p className="text-slate-400">
              Decision Studio Administrator
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}