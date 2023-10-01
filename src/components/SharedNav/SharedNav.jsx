import { Outlet, NavLink } from "react-router-dom";
import css from "./SharedNav.module.css";
import styled from "styled-components";
import { Suspense } from "react";

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
      </header>{" "}
      <Outlet />
    </>
  );
};
export default SharedNav;
