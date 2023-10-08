import { useParams } from "react-router-dom";
import { API_URL, API_IMG_URL, getJsonData } from "../../../../services/config";
import { useEffect, useState } from "react";
import css from "./Cast.module.css";

const Cast = () => {
  const { movieId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [movieCredits, setmovieCredits] = useState([]);

  const SEARCH_MOVIES_CREDITS_URL = `${API_URL}/3/movie/${movieId}/credits?language=en`;

  useEffect(() => {
    setIsLoaded(false);
    async function getMovieCredits(SEARCH_MOVIES_CREDITS_URL) {
      const movieCredits = await getJsonData(SEARCH_MOVIES_CREDITS_URL);
      setmovieCredits((prevState) => {
        return [...prevState, ...movieCredits.cast];
      });
      setIsLoaded(true);
      console.log("movieCredits", movieCredits);
    }
    getMovieCredits(SEARCH_MOVIES_CREDITS_URL);
  }, [SEARCH_MOVIES_CREDITS_URL]);

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
