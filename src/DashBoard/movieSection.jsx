import { useEffect, useState } from "react";
import {
  getPopularMovies,
  searchMovies,
} from "../services/movieApi";

import MovieCard from "./movieCard";

const MovieSection = ({ onMovieSelect, searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setError("");

        let data;

        // Search hai to searched movies lao
        if (searchQuery && searchQuery.trim() !== "") {
          data = await searchMovies(searchQuery);
        } else {
          // Search empty hai to popular movies lao
          data = await getPopularMovies();
        }

        const formattedMovies = data.map((movie) => ({
          id: movie.id,
          title: movie.title,

          image: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "",

          cover: movie.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : "",

          year: movie.release_date?.split("-")[0],

          rating: movie.vote_average?.toFixed(1),

          overview: movie.overview,
        }));

        setMovies(formattedMovies);

        // Agar movie nahi mili
        if (formattedMovies.length === 0) {
          setError(`No movies found for "${searchQuery}"`);
          return;
        }

        // First movie HeroSection me show hogi
        onMovieSelect(formattedMovies[0]);

      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("Something went wrong. Please try again.");
      }
    };

    fetchMovies();
  }, [searchQuery, onMovieSelect]);

  return (
    <section className="px-6 py-8">

      {/* Heading */}
      <h2 className="mb-5 text-2xl font-bold text-white">
        {searchQuery && searchQuery.trim() !== ""
          ? `Search Results for "${searchQuery}"`
          : "Popular Movies"}
      </h2>

      {/* Error */}
      {error && (
        <div className="flex min-h-[200px] items-center justify-center">
          <p className="text-lg text-red-400">
            {error}
          </p>
        </div>
      )}

      {/* Movies */}
      {!error && (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onMovieClick={onMovieSelect}
            />
          ))}

        </div>
      )}

    </section>
  );
};

export default MovieSection;