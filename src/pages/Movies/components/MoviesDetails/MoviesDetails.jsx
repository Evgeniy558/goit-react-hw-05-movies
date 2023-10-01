import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { API_URL, API_IMG_URL, getJsonData } from "../../../../serveces/config";
import css from "./MoviesDetails.module.css";

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const SEARCH_MOVIES_URL = `${API_URL}/3/movie/${movieId}?language=en`;

  useEffect(() => {
    async function getMovieDetailsFromApi(SEARCH_MOVIES_URL) {
      const response = await getJsonData(SEARCH_MOVIES_URL);
      setMovieDetails((prevState) => {
        return { ...prevState, ...response };
      });
      setIsLoaded(true);
      console.log("details", response);
    }
    getMovieDetailsFromApi(SEARCH_MOVIES_URL);
  }, []);

  const { genres, backdrop_path, vote_average, overview } = movieDetails;

  return (
    <div>
      {isLoaded ? (
        <div>
          <button
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back
          </button>{" "}
          <div className={css.container}>
            <div className={css.movieImg}>
              {" "}
              <img src={`${API_IMG_URL}${backdrop_path}`}></img>
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
