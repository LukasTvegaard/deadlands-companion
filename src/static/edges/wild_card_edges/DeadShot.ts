import { DieType, Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  { skill: Skill.Shooting, dieType: DieType.D10 },
];

const EdgeRequirements: Edge[] = [];

export const DeadShot: EdgeDetailType = {
  key: Edge.DeadShot,
  name: "Dead Shot",
  category: EdgeCategory.WildCard,
  description: `When dealt a Joker, the character
    doubles their total damage when making a successful Shooting attack.`,
  description_short: `When dealt a Joker, the character
    deals double damage when Shooting for the rest of the round.`,
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
