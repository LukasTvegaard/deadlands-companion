import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const ArcaneBackgroundWeirdScience: EdgeDetailType = {
  key: Edge.ArcaneBackgroundWeirdScience,
  name: "Arcane Background (Weird Science)",
  category: EdgeCategory.Background,
  description: "",
  description_short: "Arcane Background for Weird Scientists",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
