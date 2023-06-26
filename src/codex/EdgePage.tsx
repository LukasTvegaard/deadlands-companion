import { groupBy } from "lodash";
import { useState } from "react";
import styled from "styled-components";
import { Search } from "../shared/Search";
import { EdgeList } from "../static/edges/EdgeList";
import { EdgeDetailType } from "../utils/interfaces";
import { EdgeGroup } from "./EdgeGroup";
import { PageHeader } from "../shared/PageHeader";
import CodexMenu from "./CodexMenu";

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
 */
export const EdgePage = () => {
  const [searchString, setSearchString] = useState<string>("");
  const edges =
    searchString.length > 0
      ? EdgeList.filter((edge) => edgeFilter(edge, searchString))
      : EdgeList;
  const edgeListGroups = groupBy(
    edges,
    (edge: EdgeDetailType) => edge.rank_requirement
  );

  return (
    <>
      <PageHeader pageName="Edges" prevLocation={CodexMenu.Location} />
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
    </>
  );
};

EdgePage.Location = { path: "/codex/edges", name: "Edges" };

export default EdgePage;
