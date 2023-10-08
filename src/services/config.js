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

export const API_URL = "https://api.themoviedb.org/";
export const TIME_WINDOW = "week"; //possible 'day'
export const API_IMG_URL = "https://image.tmdb.org/t/p/w500";

//url for getting movies by default
export const TRENDING_URL = `${API_URL}/3/trending/all/${TIME_WINDOW}?language=${LANGUAGE}`;

// function for getting JSONdata
export async function getJsonData(url) {
  const response = await fetch(url, OPTIONS);
  return response.json();
}
