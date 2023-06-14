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

const EdgeRequirements: Edge[] = [];

export const PowerPoints: EdgeDetailType = {
  key: Edge.PowerPoints,
  name: "Power Points",
  category: EdgeCategory.Powers,
  description:
    "Wizards, weird scientists and other arcane types always want more power. This Edge grants them an additional 5 Power Points. This Edge may be selected more than once, but only once per Rank.",
  description_short: "Gain 5 additional Power Points",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
