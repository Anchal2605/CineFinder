import { ArrowRight, Play } from "lucide-react";

const LandingHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] pt-20">

      {/* Red Glow */}
      <div className="absolute left-[-180px] top-[180px] h-[450px] w-[450px] rounded-full bg-red-700/20 blur-[150px]" />

      <div className="absolute right-[-150px] top-[100px] h-[500px] w-[500px] rounded-full bg-red-900/20 blur-[160px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 lg:px-10">

        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div className="z-10">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#e50914]">
              Welcome to Cine Finder
            </p>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Movies that
              <br />

              <span className="text-[#e50914]">
                match your mood.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
              Discover amazing movies, explore different genres and find
              something you'll love to watch. Your next favorite story
              starts here.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <button className="group flex items-center gap-3 rounded-full bg-[#e50914] px-7 py-3.5 font-semibold text-white shadow-[0_0_30px_rgba(229,9,20,0.25)] transition hover:bg-red-700 hover:shadow-[0_0_40px_rgba(229,9,20,0.4)]">

                Explore Movies

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </button>

              <button className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:border-white/30 hover:bg-white/10">

                <Play
                  size={17}
                  fill="currentColor"
                />

                Watch Trailer

              </button>

            </div>

          </div>

          {/* Right Visual */}
          <div className="relative flex h-[500px] items-center justify-center">

            {/* Glow */}
            <div className="absolute h-[330px] w-[330px] rounded-full bg-red-600/20 blur-[100px]" />

            {/* Decorative Cinema Frame */}
            <div className="relative z-10 flex h-[380px] w-[280px] items-center justify-center rounded-[2rem] border border-red-500/20 bg-gradient-to-br from-red-950/40 via-black to-black shadow-[0_0_70px_rgba(229,9,20,0.2)]">

              <div className="text-center">

                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10">

                  <Play
                    size={30}
                    fill="currentColor"
                    className="ml-1 text-[#e50914]"
                  />

                </div>

                <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                  Your movie journey
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Starts Here
                </h2>

              </div>

            </div>

            {/* Small floating card */}
            <div className="absolute bottom-8 left-0 z-20 rounded-2xl border border-white/10 bg-black/80 px-5 py-4 backdrop-blur-xl">

              <p className="text-xs text-gray-500">
                DISCOVER
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Something worth watching.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LandingHero;