import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Attribute,
  Skill,
} from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";
import { EffectVariant } from "../../../utils/types/Effect";

const StatRequirements: StatRequirement[] = [
  {
    stat: Attribute.Agility,
    dieType: DieType.D8,
  },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Ambidextrous: EdgeDetailType = {
  key: Edge.Ambidextrous,
  name: "Ambidextrous",
  category: EdgeCategory.Background,
  description:
    "You hero is as deft with her left hand as she is with her right. Characters normally suffer a -2 penalty when performing physical tasks with the off-hand (characters are assumed to be right-handed). With this Edge, your warrior ignores the -2 penalty for using her off-hand.",
  description_short: "Ignore -2 penalty for off-hand actions",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [
    {
      target: Skill.Driving,
      effectVariant: EffectVariant.ModifyDie,
      value: -9,
    },
  ],
};
