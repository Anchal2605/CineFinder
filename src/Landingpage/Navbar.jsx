import { Link } from "react-router-dom";
import { Clapperboard, LogIn, ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/95 backdrop-blur-md">
      <nav className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LEFT - Logo */}
        <Link to="/" className="group flex items-center gap-3">
          
          <div className="relative flex h-11 w-11 items-center justify-center">
            
            {/* Glow */}
            <div className="absolute inset-0 rounded-xl bg-red-600/30 blur-lg transition group-hover:bg-red-600/50" />

            {/* Logo box */}
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/30 bg-gradient-to-br from-red-600 to-red-800 shadow-lg shadow-red-950/50">
              <Clapperboard size={22} className="text-white" />
            </div>

          </div>

          <div className="leading-none">
            <h1 className="text-xl font-extrabold tracking-[0.12em] text-white sm:text-2xl">
              <span className="text-red-500">CINE</span>
              <span className="text-white">FINDER</span>
            </h1>

            <p className="mt-1 text-[8px] tracking-[0.28em] text-gray-500 sm:text-[9px]">
              DISCOVER YOUR STORY
            </p>
          </div>
        </Link>


        {/* CENTER - Desktop only */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-red-500/60"></span>

            <span className="whitespace-nowrap text-[10px] font-medium tracking-[0.25em] text-gray-500">
              YOUR PERSONAL MOVIE SPACE
            </span>

            <span className="h-[1px] w-8 bg-red-500/60"></span>
          </div>
        </div>


        {/* RIGHT - Actions */}
        <div className="flex items-center gap-2 sm:gap-3">

          <Link
            to="/login"
            className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm font-medium text-gray-300 transition hover:border-red-500/40 hover:text-white sm:px-5 sm:py-2.5"
          >
            <LogIn size={17} />
            <span className="hidden sm:inline">Login</span>
          </Link>

          <Link
            to="/signup"
            className="group flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-950/40 transition hover:-translate-y-0.5 hover:bg-red-700 sm:px-5 sm:py-2.5"
          >
            <span>Get Started</span>

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>


        {/* Bottom red accent */}
        <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />

      </nav>
    </header>
  );
};

export default Navbar;