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

const StatRequirements: StatRequirement[] = [
  { stat: Attribute.Spirit, dieType: DieType.D6 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const RapidRecharge: EdgeDetailType = {
  key: Edge.RapidRecharge,
  name: "Rapid Recharge",
  category: EdgeCategory.Powers,
  description:
    "This Edge allows an arcane character to re-gain 1 Power Point every 30 minutes",
  description_short: "Regain 1 power point every 30 minutes",
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
