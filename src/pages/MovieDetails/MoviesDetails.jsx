import { useEffect, useState } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { API_IMG_URL } from "../../service/api";
import css from "./MoviesDetails.module.css";
import { ButtonBack } from "../../components/ButtonBack/ButtonBack";
import { fetchMovieDetails } from "../../service/api";

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    setIsLoaded(false);
    async function getMovieDetails(movieId) {
      const movieDetails = await fetchMovieDetails(movieId);
      setMovieDetails((prevState) => {
        return { ...prevState, ...movieDetails };
      });
      setIsLoaded(true);
    }
    getMovieDetails(movieId);
  }, [movieId]);

  const { genres, backdrop_path, vote_average, overview } = movieDetails;
  console.log("location ", location);
  return (
    <div>
      {isLoaded ? (
        <div>
          <ButtonBack />
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
            <Link
              to="cast"
              className={css.link}
              state={{ from: location.state?.from ?? "/" }}
            >
              Cast
            </Link>
            <Link
              to="reviews"
              className={css.link}
              state={{ from: location.state?.from ?? "/" }}
            >
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
