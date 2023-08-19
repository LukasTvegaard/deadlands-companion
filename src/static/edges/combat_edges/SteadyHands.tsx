import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Attribute,
} from "../../../utils/enums";
import { SkillRequirement, StatRequirement } from "../../../utils/types";
import { EdgeDetailType } from "./../../../utils/interfaces/EdgeDetail";

const StatRequirements: StatRequirement[] = [
  { stat: Attribute.Agility, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const SteadyHands: EdgeDetailType = {
  key: Edge.SteadyHands,
  name: "Steady Hands",
  category: EdgeCategory.Combat,
  description:
    "Your hero ignores the 'unstable platform' penalty for firing from the backs of animals or while riding moving vehicles. In addition, when performing actions while Running, their penalty is -1 instead of -2.",
  description_short:
    "You ignore unstable platform penalties. Running penalty is reduced to -1.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
