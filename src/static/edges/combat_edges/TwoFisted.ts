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
  { stat: Attribute.Agility, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const TwoFisted: EdgeDetailType = {
  key: Edge.TwoFisted,
  name: "Two-Fisted",
  category: EdgeCategory.Combat,
  description:
    "A Two-Fisted hero isn't ambidextrous, they have simply learned to fight with two weapons at once. When attacking with a weapon in each hand they ignore the multi-action penalty.",
  description_short:
    "Ignore multi-action penalty for attacking with a weapon in each hand.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
