import { Star } from "lucide-react";

const MovieCard = ({ movie }) => {
  return (
    <div className="group cursor-pointer">
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5">

        <img
          src={movie.image}
          alt={movie.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

        {/* Rating */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-xs backdrop-blur-md">
          <Star
            size={13}
            fill="currentColor"
            className="text-yellow-400"
          />
          <span className="text-white">{movie.rating}</span>
        </div>

        {/* Movie info */}
        <div className="absolute bottom-0 left-0 right-0 p-4">

          <h3 className="truncate text-base font-semibold text-white">
            {movie.title}
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            {movie.year} • {movie.genre}
          </p>

        </div>
      </div>
    </div>
  );
};

export default MovieCard;