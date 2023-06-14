import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { EdgeTile } from "./EdgeTile";
import { EdgeDetailType } from "../utils/interfaces";

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
            <EdgeTile edge={edge}></EdgeTile>
          ))}
        </GroupContainer>
      )}
    </>
  );
};
