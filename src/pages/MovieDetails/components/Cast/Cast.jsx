import { useParams } from "react-router-dom";
import { API_IMG_URL } from "../../../../service/api";
import { useEffect, useState } from "react";
import css from "./Cast.module.css";
import { fetchMovieCredits } from "../../../../service/api";

const Cast = () => {
  const { movieId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [movieCredits, setmovieCredits] = useState([]);

  useEffect(() => {
    setIsLoaded(false);
    async function getMovieCredits(movieId) {
      const movieDetails = await fetchMovieCredits(movieId);
      setmovieCredits((prevState) => {
        return [...prevState, ...movieDetails.cast];
      });
      setIsLoaded(true);
    }
    getMovieCredits(movieId);
  }, [movieId]);

  return (
    <div className={css.container_cast}>
      {isLoaded ? (
        <div>
          {movieCredits.map((el) => {
            return (
              <li key={el.id} className={css.actor_card}>
                <img
                  className={css.actorImg}
                  alt=""
                  src={
                    el.profile_path
                      ? `${API_IMG_URL}${el.profile_path}`
                      : "public/img/Placeholder.jpg"
                  }
                />
                <div>{el.name}</div>
                <div>Character: {el.character}</div>
              </li>
            );
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default Cast;
