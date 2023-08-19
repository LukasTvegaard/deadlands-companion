import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.Luck];

export const LuckGreat: EdgeDetailType = {
  key: Edge.LuckGreat,
  name: "Luck (Great)",
  category: EdgeCategory.Background,
  description:
    "The players draws two extra Bennies instead of one at the start of each session.",
  description_short: "Additional one extra Fate Chip each session.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
