import { getJsonData } from "./config";

export async function getMoviesAndGenres(GENRE_LIST_URL, urlFilms) {
  try {
    const arrayOfFilmsAndGenres = await Promise.all([
      getJsonData(GENRE_LIST_URL),
      getJsonData(urlFilms),
    ]);
    return arrayOfFilmsAndGenres;
  } catch (error) {
    console.log(error);
  }
}

// fetch(
//   "https://api.themoviedb.org/3/search/movie?query=the&include_adult=false&language=en-US&page=1",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
