import { DieType, Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  { skill: Skill.Fighting, dieType: DieType.D10 },
];

const EdgeRequirements: Edge[] = [];

export const MightyBlow: EdgeDetailType = {
  key: Edge.MightyBlow,
  name: "Mighty Blow",
  category: EdgeCategory.WildCard,
  description: `When dealt a Joker, the character
    doubles their total damage when making a successful Fighting attack.`,
  description_short: `When dealt a Joker, the character
    deals double damage with Fighting attacks for the rest of the round.`,
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
