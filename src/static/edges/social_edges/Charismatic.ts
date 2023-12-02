import {
  Attribute,
  DieType,
  Edge,
  EdgeCategory,
  Rank,
} from "../../../utils/enums";
import { DerivedStat } from "../../../utils/enums/DerivedStat";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";
import { EffectVariant } from "../../../utils/types/Effect";

const StatRequirements: StatRequirement[] = [
  { stat: Attribute.Spirit, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Charismatic: EdgeDetailType = {
  key: Edge.Charismatic,
  name: "Charismatic",
  category: EdgeCategory.Social,
  description:
    "Your hero has learned how to work with others, even those who might be somewhat opposed to them or their efforts. This Edge adds +2 to their Charisma",
  description_short: "+2 Charisma.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [
    {
      target: DerivedStat.Charisma,
      effectVariant: EffectVariant.ModifyFlat,
      value: 2,
    },
  ],
};
