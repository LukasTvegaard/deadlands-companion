import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { css, styled } from "styled-components";

const LinkStyle = css`
  color: white;
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  ${LinkStyle}
`;

export const StyledNavLink = styled(NavLink)`
  ${LinkStyle}
`;
