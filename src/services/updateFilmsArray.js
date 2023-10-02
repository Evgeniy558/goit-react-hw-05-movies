import { API_IMG_URL } from "./config";

export function updateFilmsArray(listOfFilms, listOfGenres) {
  return listOfFilms.map((obj) => {
    const genre_ids = obj.genre_ids.map((id) => {
      return new Map(listOfGenres.map((obj) => [obj.id, obj.name])).get(id);
    });
    const poster_path = API_IMG_URL + obj.poster_path;
    return { ...obj, genre_ids, poster_path };
  }); //with genres and url for img
}
