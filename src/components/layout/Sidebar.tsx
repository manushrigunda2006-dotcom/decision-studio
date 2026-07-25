import {
  LayoutDashboard,
  Network,
  BarChart3,
  Clock3,
  Settings,
  User,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    id: "dashboard",
  },
  {
    name: "Decision Canvas",
    icon: Network,
    id: "canvas",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    id: "analytics",
  },
  {
    name: "Recent Decisions",
    icon: Clock3,
    id: "recent",
  },
  {
    name: "Settings",
    icon: Settings,
    id: "settings",
  },
  {
    name: "Profile",
    icon: User,
    id: "profile",
  },
];

export default function Sidebar() {

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <aside className="w-72 h-screen bg-slate-950 border-r border-slate-800 fixed left-0 top-0 flex flex-col">

      {/* Logo */}

      <div className="p-8 border-b border-slate-800">

        <h1 className="text-3xl font-extrabold">

          <span className="text-pink-400">🧠</span>{" "}

          <span className="text-indigo-400">
            Decision
          </span>{" "}

          <span className="text-white">
            Studio
          </span>

        </h1>

        <p className="text-slate-400 text-sm mt-2">
          Decision Intelligence Platform
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-5 py-8 space-y-3">

        {menu.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.name}
              onClick={() => handleScroll(item.id)}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-slate-300 hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >

              <Icon size={22} />

              <span className="font-medium">
                {item.name}
              </span>

            </button>

          );

        })}

      </nav>

      {/* Workspace */}

      <div className="border-t border-slate-800 p-6">

        <div className="rounded-xl bg-slate-800 p-4">

          <p className="text-xs text-slate-400">
            Workspace
          </p>

          <h3 className="text-white font-semibold mt-2">
            Product Strategy
          </h3>

        </div>

      </div>

    </aside>
  );
}