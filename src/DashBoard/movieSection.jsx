import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movieApi";
import MovieCard from "./movieCard";

const MovieSection = ({ onMovieSelect }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getPopularMovies();

        console.log(data);

        const formattedMovies = data.map((movie) => ({
          id: movie.id,
          title: movie.title,
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          year: movie.release_date?.split("-")[0],
          rating: movie.vote_average?.toFixed(1),
          overview: movie.overview,
        }));

        setMovies(formattedMovies);

        // First movie automatically HeroSection me show hogi
        if (formattedMovies.length > 0) {
          onMovieSelect(formattedMovies[0]);
        }

      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [onMovieSelect]);

  return (
    <section className="px-6 py-8">

      <h2 className="mb-5 text-2xl font-bold text-white">
        Popular Movies
      </h2>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={onMovieSelect}
          />
        ))}

      </div>

    </section>
  );
};

export default MovieSection;