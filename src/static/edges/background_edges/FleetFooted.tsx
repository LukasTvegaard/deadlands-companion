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
  {
    stat: Attribute.Agility,
    dieType: DieType.D6,
  },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const FleetFooted: EdgeDetailType = {
  key: Edge.FleetFooted,
  name: "Fleet-Footed",
  category: EdgeCategory.Background,
  description:
    "The hero's pace is increased by +2 and he rolls a d10 instead of a d6 when running.",
  description_short: "+2 pace, d10 instead of d6 when sprinting",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [
    {
      target: DerivedStat.RunningDie,
      effectVariant: EffectVariant.ModifyDie,
      value: 2,
    },
    {
      target: DerivedStat.Pace,
      effectVariant: EffectVariant.ModifyFlat,
      value: 2,
    },
  ],
};
