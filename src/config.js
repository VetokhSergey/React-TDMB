
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '32869176feb660dbf583078b2a2dc5e1';

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'original';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'original';

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
