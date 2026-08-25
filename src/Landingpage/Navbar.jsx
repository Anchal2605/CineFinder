import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <div className="flex items-center gap-2">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e50914]">
            <span className="text-xl">🎬</span>
          </div>

          <h1 className="text-xl font-bold tracking-wide sm:text-2xl">
            <span className="text-[#e50914]">CINE</span>{" "}
            <span className="text-white">FINDER</span>
          </h1>

        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
      
       //home
       <Link to="/Home">
          <a
            href="#home"
            className="relative font-medium text-white
            after:absolute after:-bottom-2 after:left-0
            after:h-[2px] after:w-full after:bg-[#e50914]"
          >
            Home
          </a>
          </Link>

          <a
            href="#movies"
            className="text-gray-400 transition hover:text-white"
          >
            Movies
          </a>

          <a
            href="#tvshows"
            className="text-gray-400 transition hover:text-white"
          >
            TV Shows
          </a>

          <a
            href="#genres"
            className="text-gray-400 transition hover:text-white"
          >
            Genres
          </a>

          <a
            href="#watchlist"
            className="text-gray-400 transition hover:text-white"
          >
            My Watchlist
          </a>

        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-4 md:flex">

          {/* Search */}
          <div className="flex w-52 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5">

            <Search
              size={18}
              className="text-gray-400"
            />

            <input
              type="text"
              placeholder="Search movies..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
            />

          </div>

          {/* Desktop Login */}
          <Link to="/login">
            <button
              className="
                rounded-full
                bg-[#e50914]
                border border-white/15
                px-5
                py-2.5
                text-sm
                font-medium
                text-white
                transition
                hover:bg-[#c90812]
              "
            >
              Login
            </button>
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">

          <div className="flex flex-col gap-5">

            <a
              href="#home"
              className="text-white"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#movies"
              className="text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              Movies
            </a>

            <a
              href="#tvshows"
              className="text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              TV Shows
            </a>

            <a
              href="#genres"
              className="text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              Genres
            </a>

            <a
              href="#watchlist"
              className="text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              My Watchlist
            </a>

            {/* Mobile Login */}
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
            >
              <button
                className="
                  w-fit
                  rounded-full
                  bg-[#e50914]
                  px-6
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:bg-[#c90812]
                "
              >
                Login
              </button>
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;