import {
  Search,
  SlidersHorizontal,
  Bell,
} from "lucide-react";

const navItems = ["TV Series", "Movies", "Animes", "Animations"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 flex h-[80px] items-center justify-between border-b border-white/5 bg-[#1f1f24]/95 px-5 backdrop-blur-md lg:px-8">

      {/* Navigation */}
      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <button
            key={item}
            className={`text-sm transition ${
              item === "Movies"
                ? "font-semibold text-[#ef3030]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Right */}
      <div className="ml-auto flex items-center gap-3">

        {/* Search */}
        <div className="hidden h-10 w-[260px] items-center gap-3 rounded-md bg-[#29292f] px-4 sm:flex">
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search the movie"
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
          />
        </div>

        {/* Filter */}
        <button className="flex h-10 w-10 items-center justify-center rounded-md bg-[#29292f] text-gray-400 transition hover:text-white">
          <SlidersHorizontal size={18} />
        </button>

        {/* Notification */}
        <button className="flex h-10 w-10 items-center justify-center rounded-md bg-[#29292f] text-gray-400 transition hover:text-white">
          <Bell size={19} />
        </button>

      </div>
    </header>
  );
}