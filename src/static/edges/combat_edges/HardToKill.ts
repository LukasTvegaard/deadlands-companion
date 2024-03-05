import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Attribute,
} from "../../../utils/enums";
import { SkillRequirement, StatRequirement } from "../../../utils/types";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";

const StatRequirements: StatRequirement[] = [
  { stat: Attribute.Spirit, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const HardToKill: EdgeDetailType = {
  key: Edge.HardToKill,
  name: "Hard to Kill",
  category: EdgeCategory.Combat,
  description:
    "This adventurer has more lives than a truckload of cats. When forced to make Vigor rolls due to Incapacitation, they may ignore their wound modifiers. This only applies to Vigor rolls called for to resist Incapacitation or death.",
  description_short:
    "Ignore wound penalties when rolling to avoid Incapacitation or death.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [], // MISSING: Conditional effect
};
