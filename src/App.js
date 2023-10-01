import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/Home/Home";
import { SharedNav } from "./components/SharedNav/SharedNav";

import { MoviesDetails } from "./pages/Movies/components/MoviesDetails";
import { Cast } from "./pages/Movies/components/MoviesDetails/components/Cast";
import { Reviews } from "./pages/Movies/components/MoviesDetails/components/Reviews";
import { MoviesPage } from "./pages/Movies/MoviesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {" "}
        <Route path="/" element={<SharedNav />}>
          <Route index element={<Home />}></Route>
          <Route path="/movies" element={<MoviesPage />}>
            {" "}
          </Route>
          <Route path="/movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>{" "}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
