import { Link } from "react-router-dom";
import { ArrowRight, Play, Sparkles, Film } from "lucide-react";

const LandingHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#080808]">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-950/40 via-[#080808] to-[#080808]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
        
        {/* LEFT CONTENT */}
        <div className="order-1">
          
          {/* Welcome */}
          <div className="mb-5 flex items-center gap-2 sm:mb-6">
            <span className="h-[1px] w-7 bg-red-500 sm:w-10"></span>

            <span className="text-xs font-semibold tracking-[0.2em] text-red-500 sm:text-sm sm:tracking-[0.3em]">
              WELCOME TO CINE FINDER
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Find movies that
            <span className="block text-red-500">
              match your mood.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-base leading-7 text-gray-400 sm:mt-7 sm:text-lg sm:leading-8">
            Discover amazing movies, explore stories you'll love, and find
            your next favorite watch — all in one place.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            
            <Link
              to="/signup"
              className="flex items-center justify-center gap-3 rounded-full bg-red-600 px-6 py-3.5 font-semibold text-white transition hover:bg-red-700 sm:px-7 sm:py-4"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/login"
              className="flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:border-red-500 hover:text-red-400 sm:px-7 sm:py-4"
            >
              Sign In
            </Link>
          </div>

          {/* Features */}
          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:mt-12 sm:gap-8 sm:pt-7">
            
            <div>
              <h3 className="text-base font-bold text-white sm:text-2xl">
                Discover
              </h3>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                New stories
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-white sm:text-2xl">
                Explore
              </h3>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Popular movies
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-white sm:text-2xl">
                Enjoy
              </h3>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Your journey
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="order-2 flex justify-center lg:justify-end">
          
          <div className="relative flex h-[330px] w-full max-w-sm items-center justify-center overflow-hidden rounded-[28px] border border-red-500/20 bg-[#050505] sm:h-[400px] sm:max-w-md sm:rounded-[35px] lg:h-[430px]">
            
            {/* Glow */}
            <div className="absolute h-48 w-48 rounded-full bg-red-600/10 blur-3xl sm:h-64 sm:w-64"></div>

            {/* Center content */}
            <div className="relative z-10 px-4 text-center">
              
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-red-500/40 bg-red-600/10 sm:h-24 sm:w-24">
                <Play
                  size={28}
                  fill="currentColor"
                  className="ml-1 text-red-500 sm:hidden"
                />

                <Play
                  size={35}
                  fill="currentColor"
                  className="ml-1 hidden text-red-500 sm:block"
                />
              </div>

              <p className="mt-6 text-xs tracking-[0.25em] text-gray-400 sm:mt-8 sm:text-sm sm:tracking-[0.4em]">
                YOUR MOVIE JOURNEY
              </p>

              <h2 className="mt-3 text-xl font-semibold text-white sm:mt-4 sm:text-2xl">
                Discover something
                <span className="block text-red-500">
                  worth watching.
                </span>
              </h2>
            </div>

            {/* Bottom Card */}
            <div className="absolute bottom-5 left-4 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0c0c0c]/90 px-3 py-2.5 sm:bottom-7 sm:left-7 sm:gap-3 sm:px-4 sm:py-3">
              <Film size={16} className="text-red-500 sm:hidden" />
              <Film size={18} className="hidden text-red-500 sm:block" />

              <div>
                <p className="text-[10px] text-gray-500 sm:text-xs">
                  EXPLORE
                </p>

                <p className="text-xs font-medium text-white sm:text-sm">
                  Endless stories
                </p>
              </div>
            </div>

            {/* Sparkle */}
            <div className="absolute right-5 top-5 sm:right-7 sm:top-7">
              <Sparkles size={18} className="text-red-500 sm:hidden" />
              <Sparkles size={22} className="hidden text-red-500 sm:block" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;