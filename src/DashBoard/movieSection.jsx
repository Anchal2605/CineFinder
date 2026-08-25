import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "./movieCard";

export default function MovieSection({
  title,
  movies,
  continueWatching = false,
}) {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-xl font-semibold text-white">
          {title}
        </h2>

        <div className="flex gap-2">

          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-[#ef3030] hover:text-[#ef3030]">
            <ChevronLeft size={17} />
          </button>

          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-[#ef3030] hover:text-[#ef3030]">
            <ChevronRight size={17} />
          </button>

        </div>
      </div>

      {/* Movies */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            continueWatching={continueWatching}
          />
        ))}
      </div>

    </section>
  );
}