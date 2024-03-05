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
];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Investigation,
    dieType: DieType.D8,
  },
  { skill: Skill.Streetwise, dieType: DieType.D8 },
];

const EdgeRequirements: Edge[] = [];

export const Investigator: EdgeDetailType = {
  key: Edge.Investigator,
  name: "Investigator",
  category: EdgeCategory.Professional,
  description:
    "Investigators have spent a great deal of time researching ancient legends, working the streets, or deducing devilish mysteries. Investigators add +2 to Invstigation and Streetwise rolls.",
  description_short: "+2 to Investigation rolls. +2 to Streetwise rolls.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [
    {
      target: Skill.Investigation,
      effectVariant: EffectVariant.ModifyFlat,
      value: 2,
    },
    {
      target: Skill.Streetwise,
      effectVariant: EffectVariant.ModifyFlat,
      value: 2,
    },
  ],
};
