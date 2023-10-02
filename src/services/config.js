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

//url for getting list of genres for movies
export const GENRE_LIST_URL = `${API_URL}/3/genre/movie/list?language=en`;

// const url = `https://api.themoviedb.org/3/search/movie?${searchParams}`;

// console.log(url); // Вывод: "https://api.themoviedb.org/3/search/movie?query=dom%20r&include_adult=false"

// function for getting JSONdataw
export async function getJsonData(url) {
  const response = await fetch(url, OPTIONS);
  return response.json();
}
