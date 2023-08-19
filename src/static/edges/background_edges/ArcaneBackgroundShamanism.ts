import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const ArcaneBackgroundShamanism: EdgeDetailType = {
  key: Edge.ArcaneBackgroundShamanism,
  name: "Arcane Background (Shamanism)",
  category: EdgeCategory.Background,
  description:
    "Shamans are Indian holy men and women, and keepers of tribal medicine. Their power comes from bargains with the demanding spirits of the natural world. When these medicine men honor the nature spirits, they can accomplish amazing feats that make even the most doubting Thomas tremble. For details on playing a shaman, see page 85.",
  description_short: "Arcane Background for Shamans",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
