import { useEffect, useState } from "react";
import { Outlet, generatePath, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { API_URL, API_IMG_URL, getJsonData } from "../../../../serveces/config";
import css from "./MoviesDetails.module.css";

export const MoviesDetails = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const MovieId = searchParams.get('')
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const SEARCH_MOVIES_URL = `${API_URL}/3/movie/${movieId}?language=en`;

  useEffect(() => {
    async function getMovieDetailsFromApi(SEARCH_MOVIES_URL) {
      const response = await getJsonData(SEARCH_MOVIES_URL);
      setMovieDetails((prevState) => {
        return { ...prevState, ...response };
      });
      console.log(response);
    }
    getMovieDetailsFromApi(SEARCH_MOVIES_URL);
  }, []);
  const { genres, backdrop_path, vote_average, overview } = movieDetails;
  console.log(genres);

  return (
    <div>
      {" "}
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
      <div>MoviesDetails</div>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};
