import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Theme } from "./Theme";
import { Icon } from "./icons/Icon";
import { Icons } from "./icons/Icons";

const Navigation = styled.nav`
  display: flex;
  height: 48px;
  justify-content: space-between;
`;

const FooterLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex: 1;

  gap: 8px;

  height: 48px;
  align-items: center;
  padding: 0 16px;
  font-family: "Rye";
  &.active {
    color: ${Theme.Primary[100]};
  }
`;

export const Footer = () => {
  return (
    <Navigation>
      <FooterLink to="/">
        {({ isActive }) => {
          return (
            <>
              <Icon
                icon={"Hat"}
                height={36}
                width={36}
                color={isActive ? Theme.Primary[100] : "#fff"}
                viewbox="0 0 32 32"
              />
              Character
            </>
          );
        }}
      </FooterLink>

      <FooterLink to="/party">Party</FooterLink>

      <FooterLink to="/codex">
        {({ isActive }) => {
          return (
            <>
              <Icon
                icon={"Codex"}
                height={36}
                width={36}
                color={isActive ? Theme.Primary[100] : "#fff"}
                viewbox="0 0 32 32"
              />
              Codex
            </>
          );
        }}
      </FooterLink>
    </Navigation>
  );
};
