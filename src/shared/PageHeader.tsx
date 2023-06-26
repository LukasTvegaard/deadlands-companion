import { styled } from "styled-components";
import { StyledLink } from "./StyledLink";
import { Theme } from "../Theme";
import { useContext } from "react";
import { CharacterContext } from "../DeadlandsCompanion";

const BackButton = styled(StyledLink)`
  padding: 20px 0;
  color: ${Theme.Primary[100]};
`;

const PageHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  min-height: 60px;
  max-height: 60px; // Clamp
  margin-right: 24px;
`;

const HeaderItem = styled.div`
  flex: 1;
  justify-content: center;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
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
          <BackButton
            to={prevLocation.path}
          >{`< ${prevLocation.name}`}</BackButton>
        </HeaderItem>
      ) : (
        <HeaderItem />
      )}
      <HeaderItem>{pageName}</HeaderItem>
      <HeaderItem>{character?.firstName}</HeaderItem>
    </PageHeaderStyle>
  );
};
