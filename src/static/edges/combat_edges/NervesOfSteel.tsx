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
  { stat: Attribute.Vigor, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const NervesOfSteel: EdgeDetailType = {
  key: Edge.NervesOfSteel,
  name: "Nerves of Steel",
  category: EdgeCategory.Combat,
  description:
    "Your hero has learned to fight on through the most intense pain. They may ignore 1 point of wound penalties.",
  description_short: "Ignore 1 point of Wound penalties.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
