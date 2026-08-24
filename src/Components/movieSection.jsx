import { ChevronRight, Flame } from "lucide-react";
import MovieCard from "./MovieCard";

const MovieSection = () => {

  const movies = [
    {
      title: "Oppenheimer",
      year: "2023",
      genre: "Drama",
      rating: "4.8",
      image:
        "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    },
    {
      title: "Interstellar",
      year: "2014",
      genre: "Sci-Fi",
      rating: "4.9",
      image:
        "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
      title: "The Dark Knight",
      year: "2008",
      genre: "Action",
      rating: "4.8",
      image:
        "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
      title: "Inception",
      year: "2010",
      genre: "Sci-Fi",
      rating: "4.7",
      image:
        "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    },
    {
      title: "Avengers: Endgame",
      year: "2019",
      genre: "Action",
      rating: "4.7",
      image:
        "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    },
  ];

  return (
    <section
      id="movies"
      className="mx-auto max-w-7xl px-6 py-20 lg:px-10"
    >

      {/* Section Header */}
      <div className="mb-8 flex items-end justify-between">

        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[#e50914]">
            <Flame size={17} />
            Trending
          </div>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Trending Movies
          </h2>
        </div>

        <button className="hidden items-center gap-1 text-sm font-medium text-red-500 transition hover:text-red-400 sm:flex">
          View All
          <ChevronRight size={18} />
        </button>

      </div>

      {/* Movie Cards */}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            movie={movie}
          />
        ))}

      </div>

    </section>
  );
};

export default MovieSection;