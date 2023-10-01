import { useEffect, useState } from "react";
import css from "./Home.module.css";
import { getAndUpdateDataForHomePage } from "../../serveces/renderingIndex";
import { GENRE_LIST_URL, TRENDING_URL } from "../../serveces/config";
import { Link } from "react-router-dom";

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function renderHomePage() {
      const newState = await getAndUpdateDataForHomePage(
        GENRE_LIST_URL,
        TRENDING_URL
      );
      setTrendingMovies((prevState) => {
        return [...prevState, ...newState];
      });
    }
    renderHomePage();
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      <ul>
        {" "}
        {trendingMovies.length !== 0 &&
          trendingMovies.map((el) => {
            return (
              <li key={el.id}>
                <Link to={`/movies/${el.id}`} className={css.moveLink}>
                  {el.name ? el.name : el.original_title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};
