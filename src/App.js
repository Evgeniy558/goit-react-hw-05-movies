import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import "./App.css";
// import Home from "./pages/Home/Home";
import SharedNav from "./components/SharedNav/SharedNav";
// import NotFound from "./components/NotFound/NotFound";
// import MoviesDetails from "./pages/Movies/components/MoviesDetails/MoviesDetails";
// import Cast from "./pages/Movies/components/MoviesDetails/components/Cast/Cast";
// import Reviews from "./pages/Movies/components/MoviesDetails/components/Reviews/Reviews";
// import MoviesPage from "./pages/Movies/MoviesPage";

const Home = lazy(() => import("./pages/Home/Home"));
const MoviesPage = lazy(() => import("./pages/Movies/MoviesPage"));
const MoviesDetails = lazy(() => import("./pages/MovieDetails/MoviesDetails"));
const Cast = lazy(() => import("./pages/MovieDetails/components/Cast/Cast"));
const Reviews = lazy(() =>
  import("./pages/MovieDetails/components/Reviews/Reviews")
);
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

function App() {
  return (
    <Routes>
      {" "}
      <Route path="/" element={<SharedNav />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>{" "}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
