import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const ArcaneBackgroundChiMastery: EdgeDetailType = {
  key: Edge.ArcaneBackgroundChiMastery,
  name: "Arcane Background (Chi Mastery)",
  category: EdgeCategory.Background,
  description: "",
  description_short: "Arcane Background for Chi Masters",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
