import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const GiantKiller: EdgeDetailType = {
  key: Edge.GiantKiller,
  name: "Giant Killer",
  category: EdgeCategory.Combat,
  description:
    "The bigger they are, the harder they are to kill. At least for most. But your hero knows how to find the weak points in massive creatures. Your hero does +1d6 damage when attacking creatures three sizes or more larger than themselves.",
  description_short:
    "+1d6 damage when attacking creatures 3 sizes or more larger than yourself.",
  rank_requirement: Rank.Veteran,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [], // MISSING: Conditional effect
};
