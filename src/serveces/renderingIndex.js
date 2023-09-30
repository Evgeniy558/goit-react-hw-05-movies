// import { containerEl, creatNewCard } from "./creatNewCard";
import { getMoviesAndGenres } from "./getMoviesAndGenres";
// import { getMoviesAndGenres } from "./getMoviesByTranding";
import { updateFilmsArray } from "./updateFilmsArray";

export async function renderHomePage(GENRE_LIST_URL, urlFilms) {
  //1. get array of films and genres

  const arrayOfFilmAndGenres = await getMoviesAndGenres(
    GENRE_LIST_URL,
    urlFilms
  );
  if (!arrayOfFilmAndGenres) {
    return;
  }
  const listOfGenres = arrayOfFilmAndGenres[0].genres;
  const listOfFilms = arrayOfFilmAndGenres[1].results;

  //2. updata genres and url for img
  const updataListOFFilms = updateFilmsArray(listOfFilms, listOfGenres);
  console.log("updateListOfFilms", updataListOFFilms);
  return updataListOFFilms;
  //3.Build page
  // containerEl.innerHTML = "";
  // updataListOFFilms.forEach((film) => {
  //   creatNewCard(film);
  // });
}

// const img = async (url) => {
//   const response = await fetch(url);
//   return response;
// };

// const imgEl = document.querySelector(".figure_img");
// imgEl.setAttribute(
//   "src",
//   "https:image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
// );
// console.log(imgEl);

// img("").then((res) => console.log("img", res));
