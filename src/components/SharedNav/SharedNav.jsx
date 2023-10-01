import { Outlet, NavLink } from "react-router-dom";
import css from "./SharedNav.module.css";
import styled from "styled-components";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("../../pages/Home/Home"));
const SharedNav = () => {
  const StyleLink = styled(NavLink)`
    color: black;
    &.active {
      color: red;
      scale: 1.1;
    }
  `;

  const StyledFrame = styled.div`
    border: 1px solid red;
  `;
  return (
    <>
      {" "}
      <header className={css.app_header}>
        <StyledFrame>
          {" "}
          <nav className={css.nav_bar}>
            <StyleLink to="/">Home</StyleLink>
            <StyleLink end to="/movies">
              Movies
            </StyleLink>
          </nav>
        </StyledFrame>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        {" "}
        <Outlet />
        <Home />
      </Suspense>
    </>
  );
};
export default SharedNav;
