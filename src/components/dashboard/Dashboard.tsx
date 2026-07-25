import { useState } from "react";
import StatCard from "./StatCard";
import DecisionCanvas from "../canvas/DecisionCanvas";
import CanvasToolbar from "../canvas/CanvasToolbar";
import ConfidenceChart from "../charts/ConfidenceChart";
import RiskChart from "../charts/RiskChart";
import RecentDecisions from "./RecentDecisions";

interface Props {
  setSelectedDecision: (decision: any) => void;
}

export default function Dashboard({
  setSelectedDecision,
}: Props) {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="space-y-12">

      {/* Dashboard */}
      <section id="dashboard">
        <h1 className="text-4xl font-bold text-white mb-8">
          Decision Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard
            title="Active Decisions"
            value="18"
            color="text-indigo-600"
          />

          <StatCard
            title="Completed"
            value="42"
            color="text-green-600"
          />

          <StatCard
            title="Pending"
            value="9"
            color="text-yellow-500"
          />

          <StatCard
            title="Avg Confidence"
            value="91%"
            color="text-blue-600"
          />
        </div>
      </section>

      {/* Analytics */}
      <section id="analytics">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Analytics
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ConfidenceChart />
          <RiskChart />
        </div>
      </section>

      {/* Decision Canvas */}
      <section id="canvas">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Decision Canvas
        </h2>

        <CanvasToolbar />

        <DecisionCanvas
          setSelectedDecision={setSelectedDecision}
        />
      </section>

      {/* Recent Decisions */}
      <section id="recent">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Recent Decisions
        </h2>

        <RecentDecisions />
      </section>

      {/* Settings */}
      <section
        id="settings"
        className="bg-slate-800 rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">
          Settings
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Appearance */}
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="bg-slate-900 rounded-xl p-5 cursor-pointer hover:bg-slate-700 transition"
          >
            <h3 className="text-white font-semibold mb-3">
              Appearance
            </h3>

            <p className="text-slate-300">
              {darkMode
                ? "🌙 Dark Theme Enabled"
                : "☀️ Light Theme Enabled"}
            </p>
          </div>

          {/* Notifications */}
          <div
            onClick={() => setNotifications(!notifications)}
            className="bg-slate-900 rounded-xl p-5 cursor-pointer hover:bg-slate-700 transition"
          >
            <h3 className="text-white font-semibold mb-3">
              Notifications
            </h3>

            <p className="text-slate-300">
              {notifications
                ? "🔔 Notifications Enabled"
                : "🔕 Notifications Disabled"}
            </p>
          </div>

          {/* Export */}
          <div
            onClick={() => alert("Export Started")}
            className="bg-slate-900 rounded-xl p-5 cursor-pointer hover:bg-slate-700 transition"
          >
            <h3 className="text-white font-semibold mb-3">
              Export
            </h3>

            <p className="text-slate-300">
              📄 Click to Export PDF & CSV
            </p>
          </div>

          {/* Keyboard */}
          <div
            onClick={() =>
              alert(
                "Keyboard Shortcuts\n\nCtrl + S → Save\nCtrl + Z → Undo\nDelete → Remove Decision"
              )
            }
            className="bg-slate-900 rounded-xl p-5 cursor-pointer hover:bg-slate-700 transition"
          >
            <h3 className="text-white font-semibold mb-3">
              Keyboard
            </h3>

            <p className="text-slate-300">
              ⌨ Click to View Shortcuts
            </p>
          </div>

        </div>
      </section>

      {/* Profile */}
      <section
        id="profile"
        className="bg-slate-800 rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">
          Profile
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">

          <img
            src="https://i.pravatar.cc/120"
            alt="Profile"
            className="rounded-full border-4 border-indigo-500"
          />

          <div className="space-y-2">

            <h3 className="text-2xl font-semibold text-white">
              Product Manager
            </h3>

            <p className="text-slate-400">
              Decision Studio Administrator
            </p>

            <p className="text-slate-500">
              Email: manager@decisionstudio.ai
            </p>

            <p className="text-slate-500">
              Last Login: Today
            </p>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-slate-500 py-10">
        © 2026 Decision Studio • Frontend Wars Hackathon
      </footer>

    </div>
  );
}