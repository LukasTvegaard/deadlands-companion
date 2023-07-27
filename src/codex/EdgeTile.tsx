import styled from "styled-components";
import { EdgeDetailType } from "../utils/interfaces";
import { StyledLink } from "../shared/StyledLink";
import { Theme } from "../Theme";

type EdgeTileProps = {
  edge: EdgeDetailType;
};

const Tile = styled(StyledLink)`
  display: flex;
  flex-direction: column;
  border: 1px solid ${Theme.Surface[400]};
  border-radius: 4px;
  padding: 8px;
  margin: 8px;
  background-color: ${Theme.Surface[300]};
  gap: 8px;
  @media (min-width: 769px) {
    max-width: 450px;
  }
`;

const TileTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: ${Theme.Primary[600]};
`;

const TileDescription = styled.div`
  font-size: 16px;
`;

const TileRequirements = styled.div`
  color: ${Theme.Mixed[600]};
`;

export const EdgeTile = ({ edge }: EdgeTileProps) => {
  return (
    <Tile key={edge.key} to={`${edge.key}`}>
      <TileTitle>{edge.name}</TileTitle>
      <TileDescription>{edge.description_short}</TileDescription>
      <TileRequirements>Requirements</TileRequirements>
    </Tile>
  );
};
