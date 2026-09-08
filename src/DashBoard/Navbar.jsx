import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Bell,
} from "lucide-react";

import { searchMovies } from "../services/movieApi";

const navItems = ["TV Series", "Movies", "Animes", "Animations"];

export default function Navbar({
  onSearch,
  onMovieSelect,
  activeCategory,
  onCategoryChange,
}) {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(-1);

  const handleSearch = async (e) => {
    const value = e.target.value;

    // Search value Dashboard ko bhejo
    onSearch(value);

    // Input empty hai
    if (!value.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
      setSelectedMovieIndex(-1);
      return;
    }

    try {
      const data = await searchMovies(value);

      setSuggestions(data.slice(0, 5));
      setShowSuggestions(true);
      setSelectedMovieIndex(-1);
    } catch (error) {
      console.error("Suggestion error:", error);
      setSuggestions([]);
      setShowSuggestions(true);
      setSelectedMovieIndex(-1);
    }
  };

  const handleSuggestionClick = (movie) => {
    const selectedMovie = {
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
    };

    // Hero Section update
    onMovieSelect(selectedMovie);

    // Movie Section search update
    onSearch(movie.title);

    // Suggestions close
    setShowSuggestions(false);
    setSelectedMovieIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) {
      return;
    }

    // Arrow Down
    if (e.key === "ArrowDown") {
      e.preventDefault();

      setSelectedMovieIndex((prevIndex) => {
        if (prevIndex === suggestions.length - 1) {
          return 0;
        }

        return prevIndex + 1;
      });
    }

    // Arrow Up
    if (e.key === "ArrowUp") {
      e.preventDefault();

      setSelectedMovieIndex((prevIndex) => {
        if (prevIndex <= 0) {
          return suggestions.length - 1;
        }

        return prevIndex - 1;
      });
    }

    // Enter
    if (e.key === "Enter") {
      e.preventDefault();

      if (selectedMovieIndex >= 0) {
        handleSuggestionClick(suggestions[selectedMovieIndex]);
      }
    }

    // Escape
    if (e.key === "Escape") {
      setShowSuggestions(false);
      setSelectedMovieIndex(-1);
    }
  };

  return (
    <header className="sticky top-0 z-40 flex h-[80px] items-center justify-between border-b border-white/5 bg-[#1f1f24]/95 px-5 backdrop-blur-md lg:px-8">

      {/* Navigation */}
      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => {
              onCategoryChange(item);
              onSearch("");
            }}
            className={`text-sm transition ${
              activeCategory === item
                ? "font-semibold text-[#ef3030]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Right */}
      <div className="ml-auto flex items-center gap-3">

        {/* Search */}
        <div className="relative hidden sm:block">

          <div className="flex h-10 w-[260px] items-center gap-3 rounded-md bg-[#29292f] px-4">
            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search the movie"
              onChange={handleSearch}
              onKeyDown={handleKeyDown}
              onFocus={() => {
                if (suggestions.length > 0) {
                  setShowSuggestions(true);
                }
              }}
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
            />
          </div>

          {/* Suggestions */}
          {showSuggestions && (
            <div className="absolute right-0 top-12 z-50 w-[300px] overflow-hidden rounded-md border border-white/10 bg-[#29292f] shadow-xl">

              {suggestions.length > 0 ? (
                suggestions.map((movie, index) => (
                  <button
                    key={movie.id}
                    onClick={() => handleSuggestionClick(movie)}
                    className={`flex w-full items-center gap-3 px-3 py-3 text-left transition ${
                      selectedMovieIndex === index
                        ? "bg-white/10"
                        : "hover:bg-white/10"
                    }`}
                  >
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                          : ""
                      }
                      alt={movie.title}
                      className="h-12 w-8 rounded bg-gray-700 object-cover"
                    />

                    <div>
                      <p className="text-sm font-medium text-white">
                        {movie.title}
                      </p>

                      <p className="text-xs text-gray-400">
                        {movie.release_date?.split("-")[0] || "N/A"}
                      </p>
                    </div>
                  </button>
                ))
              ) : (
                <p className="px-4 py-3 text-sm text-gray-400">
                  No movies found
                </p>
              )}

            </div>
          )}

        </div>

        {/* Filter */}
        <button className="flex h-10 w-10 items-center justify-center rounded-md bg-[#29292f] text-gray-400 transition hover:text-white">
          <SlidersHorizontal size={18} />
        </button>

        {/* Notification */}
        <button className="flex h-10 w-10 items-center justify-center rounded-md bg-[#29292f] text-gray-400 transition hover:text-white">
          <Bell size={19} />
        </button>

      </div>
    </header>
  );
}