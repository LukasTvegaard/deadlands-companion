import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Skill,
  Attribute,
} from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";
import { EffectVariant } from "../../../utils/types/Effect";

const StatRequirements: StatRequirement[] = [
  { stat: Attribute.Smarts, dieType: DieType.D8 },
  { stat: Attribute.Vigor, dieType: DieType.D6 },
];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Notice,
    dieType: DieType.D8,
  },
  { skill: Skill.Survival, dieType: DieType.D6 },
  { skill: Skill.Tracking, dieType: DieType.D6 },
];

const EdgeRequirements: Edge[] = [];

export const WildernessMan: EdgeDetailType = {
  key: Edge.WildernessMan,
  name: "Wilderness Man",
  category: EdgeCategory.Professional,
  description:
    "Whether they live in the high Rockies, the Great Plains, or the deserts, wilderness men are used to the rigors of nature and take extremes of weather in stride. They gain +2 to Sruvival and Tracking. In addition, lifetimes of exposure to nature's fury give them a +2 bonus to Vigor rolls to resist Fatigue.",
  description_short:
    "+2 to Survival rolls. +2 to Tracking rolls. +2 to Vigor rolls to resist Fatigue.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [
    {
      target: Skill.Survival,
      effectVariant: EffectVariant.ModifyFlat,
      value: 2,
    },
    {
      target: Skill.Tracking,
      effectVariant: EffectVariant.ModifyFlat,
      value: 2,
    },
  ], // MISSING: Conditional effect
};
