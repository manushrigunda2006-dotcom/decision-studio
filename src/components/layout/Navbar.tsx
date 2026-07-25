import { useState } from "react";
import {
  Bell,
  Search,
  User,
  Settings,
  LogOut,
} from "lucide-react";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  const handleSearch = () => {
    const query = search.toLowerCase().trim();

    const sections: Record<string, string> = {
      dashboard: "dashboard",
      analytics: "analytics",
      canvas: "canvas",
      recent: "recent",
      settings: "settings",
      profile: "profile",
    };

    const id = sections[query];

    if (id) {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      alert("No matching section found.");
    }

    setSearch("");
  };

  return (
    <header className="h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-10">

      {/* Left */}

      <div>
        <p className="text-sm text-slate-400">
          Good Morning 👋
        </p>

        <h2 className="text-3xl font-bold text-white">
          Decision Studio
        </h2>
      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        {/* Search */}

        <div className="flex items-center bg-slate-800 rounded-xl px-4 py-3 w-80">

          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            placeholder="Search decisions..."
            className="bg-transparent ml-3 outline-none text-white w-full placeholder:text-slate-400"
          />

        </div>

        {/* Notification */}

        <button
          onClick={() => alert("No new notifications")}
          className="p-3 rounded-xl bg-slate-800 hover:bg-indigo-600 transition"
        >
          <Bell className="text-white" />
        </button>

        {/* Profile */}

        <div className="relative">

          <button
            onClick={() => setShowProfile(!showProfile)}
          >
            <img
              src="https://i.pravatar.cc/45"
              alt="Profile"
              className="rounded-full border-2 border-indigo-500 hover:scale-105 transition"
            />
          </button>

          {showProfile && (

            <div className="absolute right-0 mt-3 w-56 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50">

              <div className="p-4 border-b border-slate-700">

                <h3 className="text-white font-semibold">
                  Product Manager
                </h3>

                <p className="text-slate-400 text-sm">
                  Decision Studio
                </p>

              </div>

              <button
                onClick={() => {
                  document.getElementById("profile")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setShowProfile(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700 transition"
              >
                <User size={18} />
                Profile
              </button>

              <button
                onClick={() => {
                  document.getElementById("settings")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setShowProfile(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700 transition"
              >
                <Settings size={18} />
                Settings
              </button>

              <button
                onClick={() => {
                  setShowProfile(false);
                  alert("Logged out successfully");
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-slate-700 transition"
              >
                <LogOut size={18} />
                Logout
              </button>

            </div>

          )}

        </div>

      </div>

    </header>
  );
}