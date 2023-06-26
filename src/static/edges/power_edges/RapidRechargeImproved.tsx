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

const EdgeRequirements: Edge[] = [Edge.RapidRecharge];

export const RapidRechargeImproved: EdgeDetailType = {
  key: Edge.RapidRechargeImproved,
  name: "Rapid Recharge Improved",
  category: EdgeCategory.Combat,
  description: "The character regains 1 Power Point every 15 minutes.",
  description_short: "Regain 1 Power Point every 15 minutes",
  rank_requirement: Rank.Veteran,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};