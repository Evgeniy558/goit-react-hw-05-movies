import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./Reviews.module.css";
import { fetchMovieReviews } from "../../../../service/api";

const Reviews = () => {
  const { movieId } = useParams();
  const [moviesReviews, setMovieReviews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    async function getMovieReviews(movieId) {
      const moviesReviews = await fetchMovieReviews(movieId);
      setMovieReviews((prevState) => {
        return [...prevState, ...moviesReviews.results];
      });
      setIsLoaded(true);
      console.log("reviews", moviesReviews.results);
    }
    getMovieReviews(movieId);
  }, [movieId]);

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
