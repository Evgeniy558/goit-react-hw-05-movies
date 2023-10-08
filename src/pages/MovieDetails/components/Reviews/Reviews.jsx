import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL, getJsonData } from "../../../../services/config";
import css from "./Reviews.module.css";

const Reviews = () => {
  const { movieId } = useParams();
  const [moviesReviews, setMovieReviews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const SEARCH_MOVIES_REVIEWES_URL = `${API_URL}/3/movie/${movieId}/reviews?language=en`;

  useEffect(() => {
    setIsLoaded(false);
    async function getMovieReviews(SEARCH_MOVIES_CREDITS_URL) {
      const moviesReviews = await getJsonData(SEARCH_MOVIES_CREDITS_URL);
      setMovieReviews((prevState) => {
        return [...prevState, ...moviesReviews.results];
      });
      setIsLoaded(true);
      console.log("reviews", moviesReviews.results);
    }
    getMovieReviews(SEARCH_MOVIES_REVIEWES_URL);
  }, [SEARCH_MOVIES_REVIEWES_URL]);
  return (
    <div>
      <div className={css.container_review}>
        {isLoaded === false ? (
          <div>Loading....</div>
        ) : isLoaded === true && moviesReviews.length > 0 ? (
          moviesReviews.map((el) => {
            return (
              <li key={el.id} className={css.review_item}>
                <div className={css.author}>Author: {el.author}</div>
                <div> {el.content}</div>
              </li>
            );
          })
        ) : (
          <div>We don't have any reviews for this movie</div>
        )}
      </div>
    </div>
  );
};
export default Reviews;
