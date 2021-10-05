import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EdgeDetail } from "../components/EdgeDetail";
import { DieType, Rank, Stat } from "../utils/enums";
import { getCollection } from "../utils/firebase/firebase";
import { Edge } from "../utils/interfaces";
import { CreateEdge } from "../utils/mutations/CreateEdge";

const EdgePageWrapper = styled.div`
  margin: 0 24px;
  display: flex;
  flex-direction: column;
`;

export const EdgePage = () => {
  const [edgeData, setEdgeData] = useState<Edge[] | null>(null);

  useEffect(() => {
    async function getEdges() {
      const res = await getCollection("edges");
      const convertedRes = res.map((d) => d as Edge);
      setEdgeData(convertedRes);
    }
    getEdges();
  }, []);

  const edge: Edge = {
    name: "Arcane Resistance",
    description:
      "This individual is particularly resistant to magic (including psionics, weird science, etc.), whether by nature or by heritage. He acts as if he had 2 points of Armor when hit by damage-causing arcane powers, and adds +2 to his Trait rolls when resisting opposed powers. Even friendy arcane powers must subtract this modifier to affect the resistant hero.",
    rank_requirement: Rank.Novice,
    stat_requirements: [{ stat: Stat.Spirit, dieType: DieType.d8 }],
    skill_requirements: [],
    edge_requirements: [],
  };

  console.log(edgeData);

  //const convertedData = data && data.map(d => )

  return (
    <EdgePageWrapper>
      Edges
      {edgeData?.map((edge) => (
        <EdgeDetail edge={edge} />
      ))}
      <button onClick={() => CreateEdge(edge)}>create edge</button>
    </EdgePageWrapper>
  );
};
