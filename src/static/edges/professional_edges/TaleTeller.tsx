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
    skill: Skill.Persuasion,
    dieType: DieType.d8,
  },
];

const EdgeRequirements: Edge[] = [];

export const TaleTeller: EdgeDetailType = {
  key: Edge.TaleTeller,
  name: "Tale Teller",
  category: EdgeCategory.Professional,
  description: "TODO",
  description_short: "TODO",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
