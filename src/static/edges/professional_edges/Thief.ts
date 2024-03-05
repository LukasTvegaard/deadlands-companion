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
  { stat: Attribute.Agility, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Climbing,
    dieType: DieType.D6,
  },
  { skill: Skill.Lockpicking, dieType: DieType.D6 },
  { skill: Skill.Stealth, dieType: DieType.D8 },
];

const EdgeRequirements: Edge[] = [];

export const Thief: EdgeDetailType = {
  key: Edge.Thief,
  name: "Thief",
  category: EdgeCategory.Professional,
  description:
    "Thieves specialize in deceit, treachery, and acrobatics. They can be invaluable where traps must be detected, walls must be climbed, and locks must be picked. Thieves add +2 to Climbing, Lockpick, Stealth, as well as Notice or Repair rolls that relate to traps. The stealth bonus only applies in Urban areas.",
  description_short:
    "+2 to Climbing rolls. +2 to Lockpicking rolls. +2 to Stealth rolls. +2 to Notice and Repair rolls related to traps.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [
    {
      target: Skill.Climbing,
      effectVariant: EffectVariant.ModifyFlat,
      value: 2,
    },
    {
      target: Skill.Stealth,
      effectVariant: EffectVariant.ModifyFlat,
      value: 2,
    },
    {
      target: Skill.Lockpicking,
      effectVariant: EffectVariant.ModifyFlat,
      value: 2,
    },
  ], // MISSING: Conditional effect
};
