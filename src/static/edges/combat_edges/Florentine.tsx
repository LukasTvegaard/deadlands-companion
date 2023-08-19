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
    skill: Skill.Fighting,
    dieType: DieType.D8,
  },
];

const EdgeRequirements: Edge[] = [];

export const Florentine: EdgeDetailType = {
  key: Edge.Florentine,
  name: "Florentine",
  category: EdgeCategory.Combat,
  description:
    "A character trained to fight 'Florentine' is a master at wielding two weapons at once. They add +1 to their Fighting rolls when using two weapons. Opponents subtract 1 from any 'gang up' bonuses they would normally get against the fighter.",
  description_short:
    "+1 Fighting when using two weapons. Opponents subtract 1 from 'gang up' bonus against you.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [
    {
      target: Skill.Fighting,
      effectVariant: EffectVariant.ModifyFlat,
      value: 1,
    },
  ],
};
