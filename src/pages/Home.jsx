import { useEffect, useState } from "react";

import { renderHomePage } from "../serveces/renderingIndex";
import { GENRE_LIST_URL, TRENDING_URL } from "../serveces/config";
export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    setTrendingMovies(
      (prevState) => {
        const newState = renderHomePage(GENRE_LIST_URL, TRENDING_URL);
        return [...prevState, ...newState];
      }
      //   async () => await renderHomePage(GENRE_LIST_URL, TRENDING_URL)
    );
  }, []);

  return (
    <>
      <div>Test Home</div>

      {trendingMovies.length !== 0 &&
        trendingMovies.map((el) => {
          return <li key={el.id}>{el.original_title}</li>;
        })}
    </>
  );
};
