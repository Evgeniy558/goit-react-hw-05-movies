import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import css from "./Home.module.css";
import { getTrendingMovies } from "../../service/api";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function renderHomePage() {
      const trendingMovies = await getTrendingMovies();
      setTrendingMovies((prevState) => {
        return [...prevState, ...trendingMovies];
      });
    }
    renderHomePage();
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      <ul>
        {" "}
        {trendingMovies.length > 0 ? (
          trendingMovies.map((el) => {
            return (
              <li key={el.id}>
                <Link to={`/movies/${el.id}`} className={css.moveLink}>
                  {el.name ? el.name : el.original_title}
                </Link>
              </li>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </>
  );
};
export default Home;
