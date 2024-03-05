import groupBy from "lodash/groupBy";
import { useContext, useState } from "react";
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
import { Header } from "../shared/Header";
import { getEnumByString } from "../../utils/enums/EnumUtil";
import { IconButton } from "../../shared/buttons/IconButton";
import { Icons } from "../../icons/Icons";
import { Label, Modal } from "react-aria-components";
import { DLRadioGroup } from "../../shared/inputs/RadioGroup";
import { Checkbox } from "../../shared/buttons/Checkbox";
import { edgeHasRequirements } from "./EdgeRequirementFilterUtil";
import { CharacterContext } from "../../DeadlandsCompanion";
import { Character } from "../../utils/types/Character";

const EdgeGroupsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const edgeHasText = (edge: EdgeDetailType, searchString: string) => {
  const edgeText =
    edge.name.toLowerCase() + edge.description_short.toLowerCase();
  return edgeText.includes(searchString.toLowerCase());
};

const getFilteredEdges = (
  edgeList: EdgeDetailType[],
  searchString: string,
  hasRequirementsFilterActive: boolean,
  character: Character
) => {
  if (searchString.length > 0) {
    return edgeList.filter(
      (edge) =>
        edge.key !== Edge.Placeholder &&
        edgeHasText(edge, searchString) &&
        (!hasRequirementsFilterActive || edgeHasRequirements(edge, character))
    );
  }

  return edgeList.filter(
    (edge) =>
      edge.key !== Edge.Placeholder &&
      (!hasRequirementsFilterActive || edgeHasRequirements(edge, character))
  );
};

const parseBoolean = (value: string | null): boolean => {
  return value ? value === "true" : false;
};

const getEdgeGroupingByFromString = (value: string | null) => {
  return (
    getEnumByString(value, EdgeGroupingType) ?? EdgeGroupingType.NoGrouping
  );
};

/*
 * TODOs:
 * Filter by available to character
 */
export const hasRequirementsFilterKey = "has-requirements-filter-key";
export const edgeGroupingKey = "edge-grouping-key";

export const EdgePage = () => {
  const character = useContext(CharacterContext);
  const [tuneModalOpen, setTuneModalOpen] = useState(false);
  const [searchString, setSearchString] = useState<string>("");
  const [hasRequirementsFilterActive, setHasRequirementsFilterActive] =
    useState(parseBoolean(localStorage.getItem(hasRequirementsFilterKey)));
  const [groupingBy, setGroupingBy] = useState<EdgeGroupingType>(
    getEdgeGroupingByFromString(localStorage.getItem(edgeGroupingKey))
  );

  const handleHasRequirementsFilterChange = (value: boolean) => {
    localStorage.setItem(hasRequirementsFilterKey, JSON.stringify(value));
    setHasRequirementsFilterActive(value);
  };

  const handleGroupingByChange = (value: string) => {
    localStorage.setItem(edgeGroupingKey, value);
    setGroupingBy(getEdgeGroupingByFromString(value));
  };

  const edges = getFilteredEdges(
    EdgeList,
    searchString,
    hasRequirementsFilterActive,
    character
  );

  const edgeListGroups = groupBy(
    edges,
    getGroupingFunctionFromGroupingType(groupingBy)
  );

  return (
    <Page pageName="Edges" prevLocation={Locations.CodexMenu}>
      <Header gap={16}>
        <Search
          callback={(text) => setSearchString(text)}
          placeholder={"Search for an Edge..."}
        ></Search>
        <IconButton
          icon={Icons.Tune}
          viewbox="0 -960 960 960"
          onClick={() => setTuneModalOpen(true)}
        />
        <Modal
          isOpen={tuneModalOpen}
          onOpenChange={setTuneModalOpen}
          isDismissable
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <Label id="filter">Filter by</Label>
              <Checkbox
                isSelected={hasRequirementsFilterActive}
                onChange={handleHasRequirementsFilterChange}
              >
                Has requirements
              </Checkbox>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <Label id="radio-group-label">Group by</Label>
              <DLRadioGroup
                value={groupingBy}
                onChange={handleGroupingByChange}
                options={Object.values(EdgeGroupingType)}
              ></DLRadioGroup>
            </div>
          </div>
        </Modal>
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
