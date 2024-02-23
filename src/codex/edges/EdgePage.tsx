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
import {
  EdgeGroupingType,
  getGroupingFunctionFromGroupingType,
} from "./EdgeGroupingUtil";
import { Select } from "../shared/Select";
import { Header } from "../shared/Header";

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

const getFilteredEdges = (edgeList: EdgeDetailType[], searchString: string) => {
  if (searchString.length > 0) {
    return edgeList.filter(
      (edge) =>
        !!edge &&
        edge.key !== Edge.Placeholder &&
        edgeFilter(edge, searchString)
    );
  }

  return edgeList.filter((edge) => edge.key !== Edge.Placeholder);
};
/*
 * TODOs:
 * Search,
 * Filter by available to character
 */
export const EdgePage = () => {
  const [searchString, setSearchString] = useState<string>("");
  const [groupingBy, setGroupingBy] = useState<EdgeGroupingType>(
    EdgeGroupingType.NoGrouping
  );

  const handleGroupingByChange = (value: string) => {
    setGroupingBy(value as EdgeGroupingType); // FIXME: Dirty typecast
  };

  const edges = getFilteredEdges(EdgeList, searchString);

  const edgeListGroups = groupBy(
    edges,
    getGroupingFunctionFromGroupingType(groupingBy)
  );

  return (
    <Page pageName="Edges" prevLocation={Locations.CodexMenu}>
      <Header>
        <Search
          callback={(text) => setSearchString(text)}
          placeholder={"Search for an Edge..."}
        ></Search>
        <Select
          value={groupingBy}
          setValue={handleGroupingByChange}
          options={Object.values(EdgeGroupingType)}
        />
      </Header>
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
