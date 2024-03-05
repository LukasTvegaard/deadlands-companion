import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.LevelHeaded];

export const LevelHeadedImproved: EdgeDetailType = {
  key: Edge.LevelHeadedImproved,
  name: "Level Headed (Improved)",
  category: EdgeCategory.Combat,
  description: "Draw two more Initiative Cards instead of one.",
  description_short: "Draw two more Initiative Cards instead of one.",
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
