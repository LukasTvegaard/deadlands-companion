import { styled } from "styled-components";
import { BackButton } from "../buttons/BackButton";
import { Theme } from "./../../Theme";
import { IconButton } from "../buttons/IconButton";
import { Icons } from "../../icons/Icons";
import { useContext } from "react";
import { CharacterContext } from "../../DeadlandsCompanion";
import { StyledNavLink } from "../StyledLink";

const PageHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  min-height: 60px;
  max-height: 60px; // Clamp
  border-bottom: 1px solid ${Theme.Surface[300]};
`;

const HeaderItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
    justify-content: flex-start;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
    justify-content: flex-end;
  }
`;

const Flip = styled.div`
  transform: rotate(-90deg);
`;

type PageHeaderProps = {
  pageName: string;
  prevLocation?: {
    path: string;
    name: string;
  };
};
export const PageHeader = ({ pageName, prevLocation }: PageHeaderProps) => {
  const character = useContext(CharacterContext);

  return (
    <PageHeaderStyle>
      {prevLocation ? (
        <HeaderItem>
          <BackButton to={prevLocation.path} text={prevLocation.name} />
        </HeaderItem>
      ) : (
        <HeaderItem />
      )}
      <HeaderItem>{pageName}</HeaderItem>
      <HeaderItem>
        {character ? (
          <Flip>
            <StyledNavLink to={"/settings"}>
              {({ isActive }) => {
                return (
                  <IconButton
                    viewbox="0 0 256 256"
                    color={isActive ? Theme.Primary[100] : undefined}
                    icon={Icons.WrenchGear}
                    iconSize={30}
                    transparent
                  />
                );
              }}
            </StyledNavLink>
          </Flip>
        ) : null}
      </HeaderItem>
    </PageHeaderStyle>
  );
};
