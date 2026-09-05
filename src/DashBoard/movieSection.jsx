import { useEffect, useState } from "react";
import {
  getPopularMovies,
  searchMovies,
  getTVSeries,
  getAnimationMovies,
  getAnime,
  getUpcomingMovies,
} from "../services/movieApi";

import MovieCard from "./movieCard";

const MovieSection = ({ 
  onMovieSelect, 
  searchQuery,
  activeCategory,
  watchHistory,
  setWatchHistory,
  }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setError("");

        let data;

        // Search hai to searched movies lao
  if (activeCategory === "Watch History") {
  data = watchHistory;
  } else if (activeCategory === "Coming Soon") {
   data = await getUpcomingMovies();
  } else if (searchQuery && searchQuery.trim() !== "") {
  // Search results
  data = await searchMovies(searchQuery);

} else if (activeCategory === "TV Series") {
  data = await getTVSeries();

} else if (activeCategory === "Animes") {
  data = await getAnime();

} else if (activeCategory === "Animations") {
  data = await getAnimationMovies();

} else if (activeCategory === "Popular"){
  // Movies
  data = await getPopularMovies();

  data = data.filter((movie) => movie.vote_average >= 7);
}

else {
  data = await getPopularMovies();
}

        const formattedMovies = data.map((movie) => ({
          id: movie.id,
          title: movie.title || movie.name,

           image: movie.image || (
           movie.poster_path
           ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
           : ""
            ),

          cover: movie.cover || (
          movie.backdrop_path
          ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
           : ""
           ),

          year:
           movie.year ||
           movie.release_date?.split("-")[0] ||
           movie.first_air_date?.split("-")[0],

         rating: movie.rating || movie.vote_average?.toFixed(1),

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
  }, [searchQuery, activeCategory , onMovieSelect , watchHistory]);

  return (
    <section className="px-6 py-8">

      {/* Heading */}
        {searchQuery && searchQuery.trim() !== ""
        ? `Search Results for "${searchQuery}"`
        : activeCategory === "Movies"
        ? "Popular Movies"
        : activeCategory}

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
              onMovieClick={(movie) => {
                onMovieSelect(movie);

           setWatchHistory((prev) => {
           const alreadyWatched = prev.some(
          (item) => item.id === movie.id
             );
         if (alreadyWatched) {
         return prev;
           }

          return [movie, ...prev];
           });
              }}
            />
          ))}

        </div>
      )}

    </section>
  );
};

export default MovieSection;