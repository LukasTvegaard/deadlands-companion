import React from "react";
import styled from "styled-components";
import { EdgeDetail } from "../utils/interfaces";

type EdgeTileProps = {
  edge: EdgeDetail;
};

const Tile = styled.div`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 8px;
  margin: 8px;
  height: 175px;
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
    <Tile>
      <TileTitle>{edge.name}</TileTitle>
      <TileDescription>{edge.description_short}</TileDescription>
    </Tile>
  );
};
