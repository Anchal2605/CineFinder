import { Play, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] pt-20"
    >
      {/* Red Background Glow */}
      <div className="absolute left-[-200px] top-[180px] h-[450px] w-[450px] rounded-full bg-red-700/20 blur-[150px]" />

      <div className="absolute right-[-150px] top-[100px] h-[500px] w-[500px] rounded-full bg-red-900/20 blur-[160px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10">

        {/* ================= LEFT CONTENT ================= */}
        <div className="z-10">

          {/* Small Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            <Star size={15} fill="currentColor" />
            Discover your next favorite movie
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">

            Find Your
            <br />

            <span className="text-[#e50914]">
              Next Movie.
            </span>

          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            Explore thousands of movies, discover new stories and find
            something perfect to watch tonight with Cine Finder.
          </p>

          

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-4">

            <button className="flex items-center gap-3 rounded-full bg-[#e50914] px-7 py-3.5 font-semibold shadow-[0_0_30px_rgba(229,9,20,0.25)] transition hover:bg-red-700 hover:shadow-[0_0_40px_rgba(229,9,20,0.35)]">

              <Play
                size={18}
                fill="currentColor"
              />

              Explore Movies

            </button>

            <button className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:border-white/30 hover:bg-white/10">
              Learn More
            </button>

          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-8 border-t border-white/10 pt-6">

            <div>
              <h3 className="text-2xl font-bold text-white">
                10K+
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Movies
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">
                50+
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Genres
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">
                4.8
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Avg Rating
              </p>
            </div>

          </div>

        </div>

        {/* ================= RIGHT MOVIE VISUAL ================= */}
        <div className="relative flex h-[550px] items-center justify-center">

          {/* Glow behind poster */}
          <div className="absolute h-[350px] w-[350px] rounded-full bg-red-600/25 blur-[100px]" />

          {/* Back Poster */}
          <div className="absolute right-5 top-16 hidden h-[410px] w-[250px] rotate-[8deg] overflow-hidden rounded-3xl border border-white/10 opacity-40 sm:block">

            <img
              src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80"
              alt="Movie"
              className="h-full w-full object-cover"
            />

          </div>

          {/* Main Poster */}
          <div className="relative z-20 h-[470px] w-[300px] rotate-[-4deg] overflow-hidden rounded-3xl border border-red-500/30 shadow-[0_0_60px_rgba(229,9,20,0.25)]">

            <img
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=700&q=90"
              alt="Featured movie"
              className="h-full w-full object-cover"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            {/* Poster Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">

              <p className="text-xs uppercase tracking-widest text-red-400">
                Featured
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Discover Stories
              </h2>

              <div className="mt-3 flex items-center gap-2">

                <Star
                  size={16}
                  fill="currentColor"
                  className="text-yellow-400"
                />

                <span className="text-sm text-gray-300">
                  4.9 Rating
                </span>

              </div>

            </div>

          </div>

          {/* Floating Card */}
          <div className="absolute bottom-10 left-0 z-30 hidden w-52 rounded-2xl border border-white/10 bg-black/75 p-4 shadow-xl backdrop-blur-xl sm:block">

            <p className="text-xs text-gray-500">
              FIND SOMETHING GREAT
            </p>

            <p className="mt-2 text-sm font-semibold">
              Your next favorite movie is waiting.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;