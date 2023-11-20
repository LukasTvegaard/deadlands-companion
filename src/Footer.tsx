import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Theme } from "./Theme";
import { Icon } from "./icons/Icon";
import { Icons } from "./icons/Icons";

const FooterStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${Theme.Surface[400]};
`;

const FooterLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex: 1;
  flex-direction: column;

  font-size: 10px;
  height: 48px;
  align-items: center;
  padding: 4px 16px 16px;
  font-family: "Rye";
  &.active {
    color: ${Theme.Primary[100]};
  }
`;

export const Footer = ({ isDM }: { isDM?: boolean }) => {
  return (
    <FooterStyle>
      {isDM ? null : (
        <FooterLink to="/character">
          {({ isActive }) => {
            return (
              <>
                <Icon
                  icon={Icons.Hat}
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
      )}

      <FooterLink to="/party">Party</FooterLink>

      <FooterLink to="/codex">
        {({ isActive }) => {
          return (
            <>
              <Icon
                icon={Icons.Codex}
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
    </FooterStyle>
  );
};
