import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Skill,
  Stat,
} from "../../../utils/enums";
import { EdgeDetail } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [
  { stat: Stat.Spirit, dieType: DieType.d8 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Elan: EdgeDetail = {
  key: Edge.Elan,
  name: "Elan",
  category: EdgeCategory.Combat,
  description:
    "When this spirited hero puts her heart into something it tends to pay off in big ways. When you spend a Benny of a Trait roll (including Soak rolls), add +2 to the final total.",
  description_short: "Add +2 to roll if benny was used",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
