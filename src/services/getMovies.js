import { getJsonData } from "./config";

export async function getMovies(urlFilms) {
  try {
    const movies = await getJsonData(urlFilms);
    return movies.results;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}
