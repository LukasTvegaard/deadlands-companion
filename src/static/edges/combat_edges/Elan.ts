import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Attribute,
} from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [
  { stat: Attribute.Spirit, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Elan: EdgeDetailType = {
  key: Edge.Elan,
  name: "Elan",
  category: EdgeCategory.Combat,
  description:
    "When this spirited hero puts her heart into something it tends to pay off in big ways. When you spend a Fate Chip on a Trait roll (including Soak rolls), add +2 to the final total.",
  description_short: "Add +2 to roll if Fate Chip was used",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
