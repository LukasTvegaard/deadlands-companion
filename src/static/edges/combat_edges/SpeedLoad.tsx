import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Skill,
  Attribute,
} from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [
  { stat: Attribute.Agility, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Shooting,
    dieType: DieType.D6,
  },
];

const EdgeRequirements: Edge[] = [];

export const SpeedLoad: EdgeDetailType = {
  key: Edge.SpeedLoad,
  name: "Speed Load",
  category: EdgeCategory.Combat,
  description:
    "Your pistolero has mastered the fine art of loading their six-gun in an all-fired hurry. Your hero can reload one weapon as a free action each round.",
  description_short: "Reload a weapon as a free action each turn.",
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
