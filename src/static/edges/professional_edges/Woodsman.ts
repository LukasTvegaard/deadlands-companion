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
  { stat: Attribute.Spirit, dieType: DieType.D6 },
];

const SkillRequirements: SkillRequirement[] = [
  { skill: Skill.Survival, dieType: DieType.D8 },
  { skill: Skill.Tracking, dieType: DieType.D8 },
];

const EdgeRequirements: Edge[] = [];

export const Woodsman: EdgeDetailType = {
  key: Edge.Woodsman,
  name: "Woodsman",
  category: EdgeCategory.Professional,
  description:
    "Woodsmen are rangers, scouts and hunters who are more at home in the wilderness than in urban areas. They are skilled trackers and scouts, and know how to live off the land for months at a time. Woodsmen gain +2 to Tracking, Survival, and Stealth rolls in the wilderness.",
  description_short:
    "+2 to Survival rolls. +2 to Tracking rolls. +2 to Stealth rolls.",
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
    {
      target: Skill.Stealth,
      effectVariant: EffectVariant.ModifyFlat,
      value: 2,
    },
  ], // MISSING: Conditional effect
};
