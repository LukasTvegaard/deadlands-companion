import { characterHasEdge } from "../../static/edges/EdgeUtil";
import { Edge, dieTypeToValue, rankToValue } from "../../utils/enums";
import { EdgeDetailType } from "../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../utils/types";
import { Character } from "../../utils/types/Character";

export function hasRankRequirement(
  edgeDetail: EdgeDetailType,
  character: Character
) {
  return (
    rankToValue(character.rank) >= rankToValue(edgeDetail.rank_requirement)
  );
}

export function hasStatRequirement(
  statRequirement: StatRequirement,
  character: Character
) {
  return (
    dieTypeToValue(character.attributes[statRequirement.stat]) >=
    dieTypeToValue(statRequirement.dieType)
  );
}

export function hasSkillRequirement(
  skillRequirement: SkillRequirement,
  character: Character
) {
  if (!character.skills) return false;
  return (
    dieTypeToValue(character.skills[skillRequirement.skill]) >=
    dieTypeToValue(skillRequirement.dieType)
  );
}

export function hasEdgeRequirement(
  edgeRequirement: Edge,
  character: Character
) {
  return characterHasEdge(edgeRequirement, character);
}

export const edgeHasRequirements = (
  edgeDetail: EdgeDetailType,
  character: Character
): boolean => {
  const hasStatRequirements = edgeDetail.stat_requirements.every(
    (statRequirement) => hasStatRequirement(statRequirement, character)
  );
  const hasSkillRequirements = edgeDetail.skill_requirements.every(
    (skillRequirement) => hasSkillRequirement(skillRequirement, character)
  );
  const hasEdgeRequirements = edgeDetail.edge_requirements.every(
    (edgeRequirement) => hasEdgeRequirement(edgeRequirement, character)
  );
  return (
    hasRankRequirement(edgeDetail, character) &&
    hasStatRequirements &&
    hasSkillRequirements &&
    hasEdgeRequirements
  );
};
