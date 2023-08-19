import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { SkillRequirement, StatRequirement } from "../../../utils/types";
import { EdgeDetailType } from "./../../../utils/interfaces/EdgeDetail";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const NoMercy: EdgeDetailType = {
  key: Edge.NoMercy,
  name: "No Mercy",
  category: EdgeCategory.Combat,
  description: "The character may spend a Fate Chip to reroll damage rolls.",
  description_short: "May spend Fate Chip on damage rolls",
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
