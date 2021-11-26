import { groupBy } from "lodash";
import styled from "styled-components";
import { EdgeList } from "../edges/EdgeList";
import { EdgeDetail } from "../utils/interfaces";
import { EdgeGroup } from "./EdgeGroup";

const EdgePageWrapper = styled.div`
  margin: 0 24px;
  display: flex;
  flex-direction: column;
`;

export const EdgePage = () => {
  const edgeListGroups = groupBy(
    EdgeList,
    (edge: EdgeDetail) => edge.rank_requirement
  );

  console.log(edgeListGroups);

  return (
    <EdgePageWrapper>
      Edges
      {Object.entries(edgeListGroups).map(([groupKey, groupEdges]) => {
        return (
          <EdgeGroup
            key={groupKey}
            groupKey={groupKey}
            groupEdges={groupEdges}
          />
        );
      })}
    </EdgePageWrapper>
  );
};
