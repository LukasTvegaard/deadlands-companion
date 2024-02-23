import { CharacterContext } from "../../DeadlandsCompanion";
import { Edge, dieTypeToValue, rankToValue } from "../../utils/enums";
import { EdgeDetailType } from "../../utils/interfaces/EdgeDetail";
import { useContext } from "react";
import { database } from "../../utils/firebase/Firebase";
import { ref, set } from "firebase/database";
import { characterHasEdge } from "../../static/edges/EdgeUtil";
import { Button } from "../../shared/buttons/Button";
import { ListTitle } from "../../shared/text/ListTitle";
import { DiceIcon } from "../../icons/DiceIcons";
import styled from "styled-components";
import { StyledLink } from "../../shared/StyledLink";
import { Edges } from "../../static/edges/EdgeList";
import { Theme } from "../../Theme";

const RequirementBlock = styled.div`
  margin-bottom: 12px;
`;

const BlockTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

type RequirementLineProps = {
  hasRequirement: boolean;
};
const RequimentLine = styled.div<RequirementLineProps>`
  color: ${({ hasRequirement }) =>
    hasRequirement ? Theme.Stamina : Theme.Error[100]};
`;

const DieRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const EdgeLink = styled.div`
  display: inline;
  margin-bottom: 8px;
  text-decoration: underline;
`;

const addEdge = (characterKey: string, edgeKey: Edge) => {
  const db = database();
  set(ref(db, `characters/${characterKey}/edges/${edgeKey}`), true);
};

const removeEdge = (characterKey: string, edgeKey: Edge, edgeName: string) => {
  if (window.confirm(`Are you sure you want to remove "${edgeName}"?`)) {
    const db = database();
    set(ref(db, `characters/${characterKey}/edges/${edgeKey}`), null);
  }
};

type EdgeDetailProps = {
  edgeDetail: EdgeDetailType | undefined;
};
export const EdgeDetail = ({ edgeDetail }: EdgeDetailProps) => {
  const character = useContext(CharacterContext);

  if (!edgeDetail) {
    return <div>Edge not found</div>;
  }

  const hasRankRequirement =
    rankToValue(character.rank) >= rankToValue(edgeDetail.rank_requirement);

  const hasEdge = character && characterHasEdge(edgeDetail.key, character);
  const addToCharacterButton = character ? (
    <Button
      text="Add edge to character"
      onClick={() => addEdge(character?.id, edgeDetail.key)}
    />
  ) : null;
  const removeFromCharacterButton = character ? (
    <Button
      text="Remove edge from character"
      negative
      onClick={() => removeEdge(character?.id, edgeDetail.key, edgeDetail.name)}
    />
  ) : null;

  return (
    <div>
      <ListTitle>{edgeDetail.name}</ListTitle>
      <div style={{ marginBottom: "16px" }}>{edgeDetail.description}</div>

      <RequirementBlock>
        <BlockTitle>Rank requirement</BlockTitle>
        <RequimentLine
          hasRequirement={hasRankRequirement}
          style={{ textTransform: "capitalize" }}
        >
          {edgeDetail.rank_requirement.toLowerCase()}
          {hasRankRequirement ? " (✓)" : " (X)"}
        </RequimentLine>
      </RequirementBlock>

      {edgeDetail.stat_requirements.length > 0 ? (
        <RequirementBlock>
          <BlockTitle>Attribute requirements</BlockTitle>
          {edgeDetail.stat_requirements.map((statRequirement) => {
            const hasStatRequirement =
              dieTypeToValue(character.attributes[statRequirement.stat]) >=
              dieTypeToValue(statRequirement.dieType);
            return (
              <RequimentLine hasRequirement={hasStatRequirement}>
                <DieRow>
                  {`${statRequirement.stat}:`}
                  <DiceIcon dieType={statRequirement.dieType}></DiceIcon>
                  {hasStatRequirement ? " (✓)" : " (X)"}
                </DieRow>
              </RequimentLine>
            );
          })}
        </RequirementBlock>
      ) : null}

      {edgeDetail.skill_requirements.length > 0 ? (
        <RequirementBlock>
          <BlockTitle>Skill requirements</BlockTitle>
          {edgeDetail.skill_requirements.map((skillRequirement) => {
            const hasSkillRequirement = character.skills
              ? dieTypeToValue(character.skills[skillRequirement.skill]) >=
                dieTypeToValue(skillRequirement.dieType)
              : false;
            return (
              <RequimentLine hasRequirement={hasSkillRequirement}>
                <DieRow>
                  {`${skillRequirement.skill}:`}
                  <DiceIcon dieType={skillRequirement.dieType}></DiceIcon>
                  {hasSkillRequirement ? " (✓)" : " (X)"}
                </DieRow>
              </RequimentLine>
            );
          })}
        </RequirementBlock>
      ) : null}

      {edgeDetail.edge_requirements.length > 0 ? (
        <RequirementBlock>
          <BlockTitle>Edge requirements</BlockTitle>
          {edgeDetail.edge_requirements.map((edgeRequirement) => {
            const requirementEdgeDetail = Edges[edgeRequirement];
            const hasEdgeRequirement = characterHasEdge(
              edgeRequirement,
              character
            );
            return (
              <StyledLink to={`/codex/edges/${edgeRequirement}`}>
                <RequimentLine hasRequirement={hasEdgeRequirement}>
                  <EdgeLink>
                    {requirementEdgeDetail.key === Edge.Placeholder
                      ? `${edgeRequirement} (placeholder, look up in book)`
                      : requirementEdgeDetail.name}
                    {hasEdgeRequirement ? " (✓)" : " (X)"}
                  </EdgeLink>
                </RequimentLine>
              </StyledLink>
            );
          })}
        </RequirementBlock>
      ) : null}
      {hasEdge ? removeFromCharacterButton : addToCharacterButton}
    </div>
  );
};
