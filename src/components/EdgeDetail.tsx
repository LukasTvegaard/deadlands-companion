import React from "react";
import styled from "styled-components";
import { Edge } from "../utils/interfaces";

type EdgeDetailProps = {
  edge: Edge;
};

const EdgeColumn = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid #a1a1a1;
`;

export const EdgeDetail = ({ edge }: EdgeDetailProps) => {
  return (
    <>
      <EdgeColumn>{edge.name}</EdgeColumn>
      <EdgeColumn>{edge.description_short}</EdgeColumn>
      <EdgeColumn>{edge.rank_requirement}</EdgeColumn>
      <EdgeColumn>
        {edge.skill_requirements.map((req) => req.skill + ": " + req.dieType)}
      </EdgeColumn>
      <EdgeColumn>
        {edge.stat_requirements.map(
          (req) => req.stat + ": " + req.dieType + " "
        )}
      </EdgeColumn>
      <EdgeColumn>{edge.edge_requirements.map((req) => req + " ")}</EdgeColumn>
    </>
  );
};
