import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Attribute,
} from "../../../utils/enums";
import { DerivedStat } from "../../../utils/enums/DerivedStat";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";
import { EffectVariant } from "../../../utils/types/Effect";

const StatRequirements: StatRequirement[] = [
  { stat: Attribute.Agility, dieType: DieType.D8 },
  { stat: Attribute.Strength, dieType: DieType.D6 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Acrobat: EdgeDetailType = {
  key: Edge.Acrobat,
  name: "Acrobat",
  category: EdgeCategory.Professional,
  description:
    "Those who have formal training in the acrobatic arts or are naturally agile may take this Edge. It adds +2 to all Agility rolls made to perform acrobatic maneuvers (including Trick maneuvers), and also adds +1 to a character's Parry",
  description_short: "+2 Agility when performing acrobatic maneuvers, +1 parry",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [
    {
      target: DerivedStat.Parry,
      effectVariant: EffectVariant.ModifyFlat,
      value: 1,
    },
  ], // MISSING: Conditional effect
};
