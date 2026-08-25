import { Star, Play } from "lucide-react";

export default function MovieCard({ movie, continueWatching = false }) {
  return (
    <div className="group min-w-[155px] flex-1">

      {/* Image */}
      <div className="relative h-[215px] overflow-hidden rounded-lg bg-[#29292f] sm:h-[240px]">

        <img
          src={movie.image}
          alt={movie.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/40" />

        {/* Play button */}
        <button className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full bg-[#ef3030] text-white opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
          <Play size={18} fill="currentColor" />
        </button>

        {/* Progress */}
        {continueWatching && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <div
              className="h-full bg-[#ef3030]"
              style={{ width: `${movie.progress}%` }}
            />
          </div>
        )}

      </div>

      {/* Details */}
      <div className="mt-3 flex items-start justify-between gap-2">

        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-white">
            {movie.title}
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            {movie.year}
          </p>
        </div>

        {!continueWatching && (
          <div className="flex shrink-0 items-center gap-1 text-xs text-yellow-400">
            <Star size={13} fill="currentColor" />
            {movie.rating}
          </div>
        )}

      </div>
    </div>
  );
}