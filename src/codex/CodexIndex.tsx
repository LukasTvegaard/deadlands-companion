import styled from "styled-components";
import { StyledLink } from "../shared/StyledLink";

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const NavLink = styled(StyledLink)`
  height: 48px;
  display: flex;
  font-family: "Rye";
`;

export const CodexIndex = () => {
  return (
    <Navigation>
      <NavLink to="edges">Edges</NavLink>

      <NavLink to="hindrances">Hindrances</NavLink>

      <NavLink to="powers">Powers</NavLink>

      <NavLink to="weapons">Weapons</NavLink>
    </Navigation>
  );
};
