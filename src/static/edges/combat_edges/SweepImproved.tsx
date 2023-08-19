import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.Sweep];

export const SweepImproved: EdgeDetailType = {
  key: Edge.SweepImproved,
  name: "Sweep (Improved)",
  category: EdgeCategory.Combat,
  description: "Remove the -2 penalty from Sweep.",
  description_short: "Remove the -2 penalty from Sweep.",
  rank_requirement: Rank.Veteran,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
