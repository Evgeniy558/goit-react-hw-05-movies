import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import css from "./Movies.module.css";
import { API_URL, getJsonData } from "../../serveces/config";

const MoviesPage = () => {
  // const [queryMovies, setQueryMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [queryMovise, setQueryMovies] = useState([]);

  const movieName = searchParams.get("query") ?? "";
  const SEARCH_QUERY_MOVIES_URL = `${API_URL}/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`;

  //if query value movieName in URL string will be changed would be update the list of movies
  useEffect(() => {
    async function getQueryMoviesFromApi() {
      const response = await getJsonData(SEARCH_QUERY_MOVIES_URL);
      setQueryMovies(response.results);
      setIsLoaded(true);
      console.log("reviews", response.results);
    }

    getQueryMoviesFromApi();
  }, [movieName, SEARCH_QUERY_MOVIES_URL]);

  //set value from form to URL string
  const setQueryString = (ev) => {
    ev.preventDefault();
    ev.target.elements.movie.value
      ? setSearchParams({ query: ev.target.elements.movie.value })
      : setSearchParams({});
    console.log(ev.target.elements.movie.value);
    ev.target.elements.movie.value = "";
  };

  return (
    <div>
      <form onSubmit={setQueryString}>
        <input type="text" name="movie"></input>
        <button type="submit">Search</button>
      </form>

      <ul>
        {" "}
        {isLoaded ? (
          queryMovise.map((el) => {
            return (
              <li key={el.id}>
                <Link to={`/movies/${el.id}`} className={css.moveLink}>
                  {el.name ? el.name : el.original_title}
                </Link>
              </li>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  );
};
export default MoviesPage;
