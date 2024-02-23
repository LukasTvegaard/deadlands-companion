import { DieType, Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  { skill: Skill.Spellcasting, dieType: DieType.D10 },
];

const EdgeRequirements: Edge[] = [];

export const PowerSurgeSpellcasting: EdgeDetailType = {
  key: Edge.PowerSurgeSpellcasting,
  name: "Power Surge (spellcasting)",
  category: EdgeCategory.WildCard,
  description: `When dealt a Joker, the character
    recovers 2d6 Power Points. They may not exceed
    their usual limit.`,
  description_short: `When dealt a Joker, the character
    recovers 2d6 Power Points.`,
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
