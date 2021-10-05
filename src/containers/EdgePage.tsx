import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EdgeDetail } from "../components/EdgeDetail";
import { DieType, Rank, Skill, Stat } from "../utils/enums";
import { getCollection } from "../utils/firebase/firebase";
import { Edge } from "../utils/interfaces";
import { CreateEdge } from "../utils/mutations/CreateEdge";

const EdgePageWrapper = styled.div`
  margin: 0 24px;
  display: flex;
  flex-direction: column;
`;

const EdgeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr 1fr;
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
    name: "DM godhood",
    description_short: "Unlimited POWEEEEEEEEER",
    description:
      "This individual has ascended to absolute godhood. No man nor beast can compare. Bow before his grace, mortals.",
    rank_requirement: Rank.Legendary,
    stat_requirements: [
      { stat: Stat.Spirit, dieType: DieType.d12 },
      { stat: Stat.Smarts, dieType: DieType.d12 },
      { stat: Stat.Strength, dieType: DieType.d12 },
      { stat: Stat.Agility, dieType: DieType.d12 },
      { stat: Stat.Vigor, dieType: DieType.d12 },
    ],
    skill_requirements: [{ skill: Skill.Boating, dieType: DieType.d12 }],
    edge_requirements: ["Harder To Kill", "Two-gun kid", "Awesomesauce"],
  };

  //const convertedData = data && data.map(d => )

  return (
    <EdgePageWrapper>
      Edges
      <EdgeGrid>
        <div>Name</div>
        <div>Description</div>
        <div>Rank requirement</div>
        <div>Stat requirements</div>
        <div>Skill requirements</div>
        <div>Edge requirements</div>
        {edgeData?.map((edge) => (
          <EdgeDetail edge={edge} key={edge.name} />
        ))}
      </EdgeGrid>
      <button onClick={() => CreateEdge(edge)}>create edge</button>
    </EdgePageWrapper>
  );
};
