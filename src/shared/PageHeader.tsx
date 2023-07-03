import { styled } from "styled-components";
import { useContext } from "react";
import { CharacterContext } from "../DeadlandsCompanion";
import { BackButton } from "./BackButton";

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
          <BackButton to={prevLocation.path} text={prevLocation.name} />
        </HeaderItem>
      ) : (
        <HeaderItem />
      )}
      <HeaderItem>{pageName}</HeaderItem>
      <HeaderItem>{character?.firstName}</HeaderItem>
    </PageHeaderStyle>
  );
};
