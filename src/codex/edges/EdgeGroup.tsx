import { useState } from "react";
import styled from "styled-components";
import { EdgeDetailType } from "../../utils/interfaces/EdgeDetail";
import { Tile } from "../shared/Tile";

type EdgeGroupProps = {
  groupKey: string;
  groupEdges: EdgeDetailType[];
};

const GroupTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
`;

const GroupContainer = styled.div`
  display: grid;
  margin-left: -8px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

export const EdgeGroup = ({ groupKey, groupEdges }: EdgeGroupProps) => {
  const localStorageKey = `${groupKey}-expanded`;
  const localExpansionState = localStorage.getItem(localStorageKey);
  const [expanded, setExpanded] = useState(
    localExpansionState ? JSON.parse(localExpansionState) : true
  );

  const toggleExpanded = () => {
    const newExpansionState = !expanded;
    localStorage.setItem(localStorageKey, "" + newExpansionState);
    setExpanded(newExpansionState);
  };

  return (
    <>
      <GroupTitle onClick={() => toggleExpanded()}>{groupKey}</GroupTitle>
      {expanded && (
        <GroupContainer>
          {groupEdges.map((edge) => (
            <Tile
              key={edge.key}
              link={edge.key}
              name={edge.name}
              description={edge.description_short}
            />
          ))}
        </GroupContainer>
      )}
    </>
  );
};
