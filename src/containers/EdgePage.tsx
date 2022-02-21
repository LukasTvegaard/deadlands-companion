import { groupBy } from "lodash";
import { useState } from "react";
import styled from "styled-components";
import { Search } from "../components/Search";
import { EdgeList } from "../edges/EdgeList";
import { EdgeDetail } from "../utils/interfaces";
import { EdgeGroup } from "./EdgeGroup";
import { PageWrapper } from "./PageStyles.styled";

const EdgeGroupsWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const edgeFilter = (edge: EdgeDetail, searchString: string) => {
  const edgeText =
    edge.name.toLowerCase() + edge.description_short.toLowerCase();
  return edgeText.includes(searchString.toLowerCase());
};
/*
 * TODOs:
 * Search,
 */
export const EdgePage = () => {
  const [searchString, setSearchString] = useState<string>("");
  const edges =
    searchString.length > 0
      ? EdgeList.filter((edge) => edgeFilter(edge, searchString))
      : EdgeList;
  const edgeListGroups = groupBy(
    edges,
    (edge: EdgeDetail) => edge.rank_requirement
  );

  return (
    <PageWrapper>
      Edges
      <Search
        callback={(text) => setSearchString(text)}
        placeholder={"Search for an Edge..."}
      ></Search>
      <EdgeGroupsWrapper>
        {Object.entries(edgeListGroups).map(([groupKey, groupEdges]) => {
          return (
            <EdgeGroup
              key={groupKey}
              groupKey={groupKey}
              groupEdges={groupEdges}
            />
          );
        })}
      </EdgeGroupsWrapper>
    </PageWrapper>
  );
};
