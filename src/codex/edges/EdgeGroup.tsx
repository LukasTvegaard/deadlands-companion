import { useState } from "react";
import styled from "styled-components";
import { EdgeDetailType } from "../../utils/interfaces/EdgeDetail";
import { Tile } from "../shared/Tile";
import { Icon } from "../../icons/Icon";
import { Icons } from "../../icons/Icons";
import { Theme } from "../../Theme";

type EdgeGroupProps = {
  groupKey: string;
  groupEdges: EdgeDetailType[];
};

const GroupWrapper = styled.div`
  &:not(:first-child) {
    margin-top: 24px;
  }
`;

const GroupTitle = styled.div`
  display: flex;
  font-size: 24px;
  cursor: pointer;
`;

const GroupContainer = styled.div`
  display: grid;
  margin-left: -8px;
  //grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
    <GroupWrapper>
      {groupKey === "none" ? null : (
        <GroupTitle onClick={() => toggleExpanded()}>
          {groupKey}
          <Icon
            icon={expanded ? Icons.ChevronUp : Icons.ChevronDown}
            height={24}
            width={24}
            color={Theme.Surface[400]}
          />
        </GroupTitle>
      )}
      {expanded && (
        <GroupContainer>
          {groupEdges
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((edge) => (
              <Tile
                key={edge.key}
                link={edge.key}
                name={edge.name}
                description={edge.description_short}
              />
            ))}
        </GroupContainer>
      )}
    </GroupWrapper>
  );
};
