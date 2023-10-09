import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams, useLocation } from "react-router-dom";
import css from "./Movies.module.css";
import { getQueryMovies } from "../../service/api";

const MoviesPage = () => {
  // const [queryMovies, setQueryMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [queryMovise, setQueryMovies] = useState([]);
  const location = useLocation();
  const movieName = searchParams.get("query") ?? "";

  //if query value movieName in URL string will be changed would be update the list of movies
  useEffect(() => {
    async function getQueryMoviesFromApi() {
      const queryMovies = await getQueryMovies(movieName);
      setQueryMovies(queryMovies);
      setIsLoaded(true);
    }
    getQueryMoviesFromApi();
  }, [movieName]);

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
                <Link
                  to={`/movies/${el.id}`}
                  className={css.moveLink}
                  state={{ from: location }}
                >
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
