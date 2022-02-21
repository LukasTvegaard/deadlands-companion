import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  height: 48px;
  padding: 0 24px;
  background-color: #c3976a;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const NavButton = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-family: "Rye";
  &:hover {
    background-color: #ac714a;
  }
`;

export const Header = () => {
  return (
    <Navigation>
      <Link to="/">
        <NavButton>Home</NavButton>
      </Link>

      <Link to="/edges">
        <NavButton>Edges</NavButton>
      </Link>

      <Link to="/hindrances">
        <NavButton>Hindrances</NavButton>
      </Link>

      <Link to="/powers">
        <NavButton>Powers</NavButton>
      </Link>

      <Link to="/weapons">
        <NavButton>Weapons</NavButton>
      </Link>
    </Navigation>
  );
};
