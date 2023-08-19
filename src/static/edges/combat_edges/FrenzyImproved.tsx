import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.Frenzy];

export const FrenzyImproved: EdgeDetailType = {
  key: Edge.FrenzyImproved,
  name: "Frenzy (Improved)",
  category: EdgeCategory.Combat,
  description:
    "The Frenzy attack can be made without incurring the -2 penalty.",
  description_short: "Remove -2 penalty from Frenzy attack.",
  rank_requirement: Rank.Veteran,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
