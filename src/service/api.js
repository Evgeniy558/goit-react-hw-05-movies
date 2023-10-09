export const API_URL = "https://api.themoviedb.org/";
export const TIME_WINDOW = "week"; //possible 'day'
export const API_IMG_URL = "https://image.tmdb.org/t/p/w500";
export const API_KEY = "9c6aa02a42d8f864e276c75f99e2dd35";
export const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzZhYTAyYTQyZDhmODY0ZTI3NmM3NWY5OWUyZGQzNSIsInN1YiI6IjY0NjUxNjQzZjQ4YjM0MDEzODRiZGM3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jwzOnHmE9-th0gJdfx9IBYtKzgZwQ2EcKQ24HvPVQas";
export const LANGUAGE = "en-US";
export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

// function for getting JSONdata
export async function getJsonData(url) {
  const response = await fetch(url, OPTIONS);
  return response.json();
}

//url for getting movies by default
export async function getTrendingMovies() {
  const TRENDING_URL = `${API_URL}/3/trending/all/${TIME_WINDOW}?language=${LANGUAGE}`;
  try {
    const movies = await getJsonData(TRENDING_URL);
    return movies.results;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}

//url for getting movies by searchvalue
export async function getQueryMovies(movieName) {
  const SEARCH_QUERY_MOVIES_URL = `${API_URL}/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`;
  try {
    const movies = await getJsonData(SEARCH_QUERY_MOVIES_URL);
    return movies.results;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}

// get movie's details
export async function fetchMovieDetails(movieId) {
  const SEARCH_MOVIES_URL = `${API_URL}/3/movie/${movieId}?language=en`;
  try {
    const movieDetails = await getJsonData(SEARCH_MOVIES_URL);
    return movieDetails;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}

// get movie's Credits
export async function fetchMovieCredits(movieId) {
  const SEARCH_MOVIES_CREDITS_URL = `${API_URL}/3/movie/${movieId}/credits?language=en`;
  try {
    const movieCredits = await getJsonData(SEARCH_MOVIES_CREDITS_URL);
    return movieCredits;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}
// get movie's Reviews
export async function fetchMovieReviews(movieId) {
  const SEARCH_MOVIES_REVIEWES_URL = `${API_URL}/3/movie/${movieId}/reviews?language=en`;
  try {
    const movieReviews = await getJsonData(SEARCH_MOVIES_REVIEWES_URL);
    return movieReviews;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}
