import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Skill,
  Stat,
} from "../../../utils/enums";
import { EdgeDetail } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [
  {
    stat: Stat.Agility,
    dieType: DieType.d8,
  },
];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Boating,
    dieType: DieType.d12,
  },
];

const EdgeRequirements: Edge[] = [Edge.Alertness];

export const EdgeDetailTemplate: EdgeDetail = {
  key: Edge.Alertness,
  name: "",
  category: EdgeCategory.Background,
  description: "",
  description_short: "",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
