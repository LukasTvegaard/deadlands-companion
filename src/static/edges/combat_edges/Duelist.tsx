import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Skill,
  Attribute,
} from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Shooting,
    dieType: DieType.D6,
  },
];

const EdgeRequirements: Edge[] = [];

export const Duelist: EdgeDetailType = {
  key: Edge.Duelist,
  name: "Duelist",
  category: EdgeCategory.Combat,
  description:
    "Your hombre is a deadly gunfighter, and anyone foolish enmough to face him at High Noon winds up in the boneyard by sunset. In a duel, this hero receives an extra hole card for each point of Grit he has. Rules for dueling can be found on page 62 of the Deadlands Player's Guide.",
  description_short: "Draw extra card per point of Grit when in a duel.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
