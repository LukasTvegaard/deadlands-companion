import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { EdgeTile } from "../components/EdgeTile";
import { EdgeDetail } from "../utils/interfaces";

type EdgeGroupProps = {
  groupKey: string;
  groupEdges: EdgeDetail[];
};

const GroupTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
`;

const GroupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

export const EdgeGroup = ({ groupKey, groupEdges }: EdgeGroupProps) => {
  const localStorageKey = `${groupKey}-expanded`;
  const localExpansionState = localStorage.getItem(localStorageKey);
  const [expanded, setExpanded] = useState(
    localExpansionState ? JSON.parse(localExpansionState) : false
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
            <Link
              key={edge.key}
              to={(location) => `${location.pathname}/${edge.key}`}
            >
              <EdgeTile edge={edge}></EdgeTile>
            </Link>
          ))}
        </GroupContainer>
      )}
    </>
  );
};
