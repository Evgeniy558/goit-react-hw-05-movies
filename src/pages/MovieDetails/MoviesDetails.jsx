import { useEffect, useState } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { API_URL, API_IMG_URL, getJsonData } from "../../services/config";
import css from "./MoviesDetails.module.css";
import { ButtonBack } from "../../components/ButtonBack/ButtonBack";

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  const SEARCH_MOVIES_URL = `${API_URL}/3/movie/${movieId}?language=en`;

  useEffect(() => {
    setIsLoaded(false);
    async function getMovieDetails(SEARCH_MOVIES_URL) {
      const movieDetails = await getJsonData(SEARCH_MOVIES_URL);
      setMovieDetails((prevState) => {
        return { ...prevState, ...movieDetails };
      });
      setIsLoaded(true);
    }
    getMovieDetails(SEARCH_MOVIES_URL);
  }, [SEARCH_MOVIES_URL]);

  const { genres, backdrop_path, vote_average, overview } = movieDetails;
  console.log("location ", location);
  return (
    <div>
      {isLoaded ? (
        <div>
          <ButtonBack string={"movies"} />
          <div className={css.container}>
            <div className={css.movieImg}>
              {" "}
              <img src={`${API_IMG_URL}${backdrop_path}`} alt=""></img>
            </div>
            <div className={css.movieInformation}>
              <h2>
                {" "}
                {movieDetails.name
                  ? movieDetails.name
                  : movieDetails.original_title}
              </h2>
              <div className={css.information}>
                User Score: {Math.round(vote_average * 10)}%
              </div>
              <h3>Overview</h3>
              <div className={css.information}>{overview}</div>
              <h3>Genres</h3>
              <div className={css.information}>
                {genres ? genres.map((genre) => genre.name).join(", ") : null}
              </div>
            </div>
          </div>
          <div className={css.containerinfo}>
            <div>Aditional information</div>
            <Link to="cast" className={css.link}>
              Cast
            </Link>
            <Link to="reviews" className={css.link}>
              Reviews
            </Link>
          </div>
          <Outlet />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default MoviesDetails;
