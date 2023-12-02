import {
  Attribute,
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Skill,
} from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";
import { EffectVariant } from "../../../utils/types/Effect";

const StatRequirements: StatRequirement[] = [
  { stat: Attribute.Spirit, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Healer: EdgeDetailType = {
  key: Edge.Healer,
  name: "Healer",
  category: EdgeCategory.Weird,
  description:
    "Your hero adds +2 to all Healing rolls, whether natural or magical in nature.",
  description_short: "+2 to natural and magical Healing rolls.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [
    {
      target: Skill.Healing,
      effectVariant: EffectVariant.ModifyFlat,
      value: 2,
    },
  ],
};
