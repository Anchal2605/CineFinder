import { Star, Play } from "lucide-react";

export default function MovieCard({ movie, onMovieClick }) {
  return (
    <div
      onClick={() => onMovieClick(movie)}
      className="group min-w-[155px] cursor-pointer"
    >

      {/* Movie Image */}
      <div className="relative h-[215px] overflow-hidden rounded-lg bg-[#29292f] sm:h-[240px]">

        <img
          src={movie.image}
          alt={movie.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        {/* Hover Play Button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600">

            <Play
              size={22}
              fill="white"
              className="ml-1 text-white"
            />

          </div>

        </div>
      </div>

      {/* Movie Details */}
      <h3 className="mt-3 truncate font-semibold text-white">
        {movie.title}
      </h3>

      <div className="mt-1 flex items-center justify-between text-sm text-gray-400">

        <span>
          {movie.year || "N/A"}
        </span>

        <span className="flex items-center gap-1">

          <Star
            size={15}
            fill="yellow"
            className="text-yellow-400"
          />

          {movie.rating || "N/A"}

        </span>

      </div>

    </div>
  );
}