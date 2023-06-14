import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Skill,
  Attribute,
} from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.Counterattack];

export const CounterAttackImproved: EdgeDetailType = {
  key: Edge.CounterattackImproved,
  name: "Counterattack (Improved",
  category: EdgeCategory.Combat,
  description: "Remove -2 penalty from Counterattack",
  description_short: "Remove -2 penalty from Counterattack",
  rank_requirement: Rank.Veteran,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
