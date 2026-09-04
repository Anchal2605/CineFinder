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