import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Attribute,
} from "../../../utils/enums";
import { DerivedStat } from "../../../utils/enums/DerivedStat";
import { EdgeDetailType } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";
import { EffectVariant } from "../../../utils/types/Effect";

const StatRequirements: StatRequirement[] = [
  {
    stat: Attribute.Vigor,
    dieType: DieType.D6,
  },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Attractive: EdgeDetailType = {
  key: Edge.Attractive,
  name: "Attractive",
  category: EdgeCategory.Background,
  description:
    "It's no secret that beautiful people have an easier time getting their way in life. This Edge grants your beautiful or handsome character +2 to Charisma",
  description_short: "+2 Charisma",
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
