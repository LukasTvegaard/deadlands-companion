import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.HighRoller];

export const HighRollerImproved: EdgeDetailType = {
  key: Edge.ImprovedHighRoller,
  name: "High Roller (Improved)",
  category: EdgeCategory.Powers,
  description: `Draw an additional extra card when dealing with the Devil.`,
  description_short: `Draw an additional extra card when dealing with the Devil`,
  rank_requirement: Rank.Veteran,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
