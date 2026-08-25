import { Play, Plus } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative mx-4 mt-5 h-[330px] overflow-hidden rounded-xl sm:h-[380px]">

      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=1600&q=85"
        alt="Featured movie"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/10" />

      <div className="relative z-10 flex h-full max-w-[520px] flex-col justify-center px-7 sm:px-10">

        <p className="mb-2 text-sm font-medium text-gray-300">
          Featured Movie
        </p>

        <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
          The
          <br />
          <span className="text-5xl sm:text-6xl">Batman</span>
        </h2>

        <div className="mt-4 flex items-center gap-3 text-xs text-gray-300">
          <span>2022</span>
          <span className="h-1 w-1 rounded-full bg-gray-500" />
          <span>PG-13</span>
          <span className="h-1 w-1 rounded-full bg-gray-500" />
          <span>2h 56m</span>
        </div>

        <p className="mt-4 max-w-[450px] text-xs leading-5 text-gray-300 sm:text-sm">
          When a sadistic serial killer begins murdering key political
          figures in Gotham, Batman is forced to investigate the city's
          hidden corruption.
        </p>

        <div className="mt-6 flex gap-3">

          <button className="flex items-center gap-2 rounded-md bg-[#ef3030] px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700">
            <Play size={16} fill="currentColor" />
            Play Now
          </button>

          <button className="flex items-center gap-2 rounded-md border border-white/50 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">
            <Plus size={17} />
            Add to list
          </button>

        </div>
      </div>
    </section>
  );
}