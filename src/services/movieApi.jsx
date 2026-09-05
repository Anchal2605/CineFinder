import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
    },
  });

  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
      query: query,
    },
  });

  return response.data.results;
};

// TV Series
export const getTVSeries = async () => {
  const response = await axios.get(`${BASE_URL}/tv/popular`, {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
    },
  });

  return response.data.results;
};


// Animation Movies
export const getAnimationMovies = async () => {
  const response = await axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
      with_genres: 16,
    },
  });

  return response.data.results;
};


// Anime
export const getAnime = async () => {
  const response = await axios.get(`${BASE_URL}/discover/tv`, {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
      with_genres: 16,
      with_origin_country: "JP",
    },
  });

  return response.data.results;
};

export const getUpcomingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
    },
  });

  return response.data.results;
};