import groupBy from "lodash/groupBy";
import { useState } from "react";
import styled from "styled-components";
import { Search } from "../../shared/Search";
import { EdgeList } from "../../static/edges/EdgeList";
import { EdgeDetailType } from "../../utils/interfaces/EdgeDetail";
import { EdgeGroup } from "./EdgeGroup";
import Page from "../../shared/page/Page";
import { Locations } from "../../utils/Location";
import { Edge } from "../../utils/enums";

const EdgeGroupsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-right: 12px;
`;

const edgeFilter = (edge: EdgeDetailType, searchString: string) => {
  const edgeText =
    edge.name.toLowerCase() + edge.description_short.toLowerCase();
  return edgeText.includes(searchString.toLowerCase());
};
/*
 * TODOs:
 * Search,
 * Filter by available to character
 */
export const EdgePage = () => {
  const [searchString, setSearchString] = useState<string>("");
  const edges =
    searchString.length > 0
      ? EdgeList.filter(
          (edge) =>
            !!edge &&
            edge.key !== Edge.Placeholder &&
            edgeFilter(edge, searchString)
        )
      : EdgeList.filter((edge) => edge.key !== Edge.Placeholder);
  const edgeListGroups = groupBy(edges, (edge: EdgeDetailType) => "none");

  return (
    <Page pageName="Edges" prevLocation={Locations.CodexMenu}>
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
    </Page>
  );
};

export default EdgePage;
