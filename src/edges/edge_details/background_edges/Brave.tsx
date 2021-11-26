import { DieType, Edge, EdgeCategory, Rank, Stat } from "../../../utils/enums";
import { EdgeDetail } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [
  {
    stat: Stat.Spirit,
    dieType: DieType.d6,
  },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Brave: EdgeDetail = {
  key: Edge.Brave,
  name: "Brave",
  category: EdgeCategory.Background,
  description:
    "Those with the Edge have learned to master their fear. Or perhaps are so jaded or emotionally distant they've just lost their normal 'fight or flight' responses. Either way, your hero adds +2 to Guts rolls.",
  description_short: "+2 Guts",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
