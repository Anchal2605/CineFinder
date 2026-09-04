 import { Play, Plus } from "lucide-react";

export default function HeroSection({ movie }) {

  // Jab tak movie nahi aati
  if (!movie) {
    return (
      <section className="relative mx-4 mt-5 h-[330px] overflow-hidden rounded-xl bg-[#29292f] sm:h-[380px]">
        <div className="flex h-full items-center px-7 sm:px-10">
          <p className="text-gray-400">
            Loading movie...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative mx-4 mt-5 h-[330px] overflow-hidden rounded-xl sm:h-[380px]">

      {/* Background */}
      <img
        src={movie.image}
        alt={movie.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full max-w-[520px] flex-col justify-center px-7 sm:px-10">

        <p className="mb-2 text-sm font-medium text-gray-300">
          Featured Movie
        </p>

        {/* Movie Title */}
        <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
          {movie.title}
        </h2>

        {/* Movie Info */}
        <div className="mt-4 flex items-center gap-3 text-xs text-gray-300">

          <span>{movie.year || "N/A"}</span>

          <span className="h-1 w-1 rounded-full bg-gray-500" />

          <span>⭐ {movie.rating || "N/A"}</span>

        </div>

        {/* Movie Overview */}
        <p className="mt-4 max-w-[450px] text-xs leading-5 text-gray-300 sm:text-sm">
          {movie.overview || "No description available."}
        </p>

        {/* Buttons */}
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