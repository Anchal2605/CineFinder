import {
  Home,
  Users,
  Clock3,
  PlayCircle,
  Settings,
  LogOut,
  Tv,
  Star,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    icon: Home,
  },
  /*{
    name: "Community",
    icon: Users,
  },*/
  {
    name: "Watch History",
    icon: Clock3,
  },
  {
    name: "Coming Soon",
    icon: PlayCircle,
  },
];

const socialItems = [
  {
    name: "Media",
    icon: Tv,
  },
  {
    name: "Popular",
    icon: Star,
  },
];

export default function Sidebar({ onCategoryChange , activeCategory}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/", { replace: true });
  };

  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-[230px] border-r border-white/5 bg-[#29292f] lg:block">

      {/* Logo */}
      <div className="flex h-[90px] items-center px-10">
        <h1 className="text-xl font-black tracking-[8px] text-[#ef3030]">
          CINE FINDER
        </h1>
      </div>

      <div className="px-5">

        {/* Menu */}
        <p className="mb-5 px-5 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Menu
        </p>

        <nav className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            const isActive =
           (item.name === "Home" && activeCategory === "Movies") ||
            item.name === activeCategory;

            return (
              <button
                key={item.name}
                onClick={() => {
                  if (item.name === "Home") {
                    onCategoryChange("Movies");
                  }

                  if (item.name === "Watch History") {
                    onCategoryChange("Watch History");
                  }

                  if (item.name === "Coming Soon") {
                   onCategoryChange("Coming Soon");
                        }                    
                }}
                className={`group relative flex w-full items-center gap-4 rounded-md px-5 py-3 text-sm transition ${
                  isActive
                    ? "bg-[#ef3030]/10 text-[#ef3030]"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 h-9 w-1 rounded-r-full bg-[#ef3030]" />
                )}

                <Icon size={18} strokeWidth={1.8} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Social */}
        <p className="mb-5 mt-10 px-5 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Social
        </p>

        <nav className="space-y-2">
          {socialItems.map((item) => {
            const Icon = item.icon;

         const isActive = item.name === activeCategory;
            return (
              <button
                key={item.name}
                onClick={() => {
                   onCategoryChange(item.name)
                }}
                className={`group relative flex w-full items-center gap-4 rounded-md px-5 py-3 text-sm transition ${
                  isActive
              ? "bg-[#ef3030]/10 text-[#ef3030]"
                 : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
              >
                {isActive && (
               <span className="absolute left-0 h-9 w-1 rounded-r-full bg-[#ef3030]" />
                   )}

                <Icon size={18} strokeWidth={1.8} />
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* General */}
        <p className="mb-5 mt-10 px-5 text-xs font-semibold uppercase tracking-wider text-gray-400">
          General
        </p>

        <nav className="space-y-2">

          <button className="flex w-full items-center gap-4 rounded-md px-5 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white">
            <Settings size={18} />
            Settings
          </button>

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-4 rounded-md px-5 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white"
          >
            <LogOut size={18} />
            Log out
          </button>

        </nav>

      </div>
    </aside>
  );
}