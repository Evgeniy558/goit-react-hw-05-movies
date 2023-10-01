import { Outlet, NavLink } from "react-router-dom";
import css from "./SharedNav.module.css";
import styled from "styled-components";

export const SharedNav = () => {
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
    <div>
      <div className={css.App}>
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
        <Outlet />
      </div>
    </div>
  );
};
