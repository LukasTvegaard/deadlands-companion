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

const StatRequirements: StatRequirement[] = [
  { stat: Attribute.Smarts, dieType: DieType.d8 },
];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Investigation,
    dieType: DieType.d8,
  },
  { skill: Skill.Streetwise, dieType: DieType.d8 },
];

const EdgeRequirements: Edge[] = [];

export const Investigator: EdgeDetailType = {
  key: Edge.Investigator,
  name: "Investigator",
  category: EdgeCategory.Professional,
  description:
    "Investigators have spent a great deal of time researching ancient legends, working the streets, or deducing devilish mysteries. Investigators add +2 to Invstigation and Streetwise rolls, as well as Notice rolls made to search through evidence.",
  description_short:
    "+2 to Investigation roll, +2 to Streetwise roll, +2 to Notice rolls when searching through evidence",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
