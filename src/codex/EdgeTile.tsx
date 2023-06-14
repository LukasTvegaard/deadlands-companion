import styled from "styled-components";
import { EdgeDetailType } from "../utils/interfaces";
import { Link } from "react-router-dom";
import { StyledLink } from "../shared/StyledLink";
import { Theme } from "../Theme";

type EdgeTileProps = {
  edge: EdgeDetailType;
};

const Tile = styled(StyledLink)`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 8px;
  margin: 8px;
  height: 175px;
  background-color: ${Theme.Surface[300]};
  @media (min-width: 769px) {
    max-width: 450px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const TileTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-family: "Rye";
  margin-bottom: 8px;
`;

const TileDescription = styled.div`
  font-size: 13px;
`;

export const EdgeTile = ({ edge }: EdgeTileProps) => {
  return (
    <Tile key={edge.key} to={`${edge.key}`}>
      <TileTitle>{edge.name}</TileTitle>
      <TileDescription>{edge.description_short}</TileDescription>
    </Tile>
  );
};
