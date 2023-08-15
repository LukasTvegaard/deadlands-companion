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
  {
    stat: Attribute.Agility,
    dieType: DieType.D8,
  },
];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Boating,
    dieType: DieType.D12,
  },
];

const EdgeRequirements: Edge[] = [Edge.Alertness];

export const EdgeDetailTemplate: EdgeDetailType = {
  key: Edge.Alertness,
  name: "",
  category: EdgeCategory.Background,
  description: "",
  description_short: "",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
