import {
  Attribute,
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Skill,
} from "../../../utils/enums";
import { SkillRequirement, StatRequirement } from "../../../utils/types";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";

const StatRequirements: StatRequirement[] = [
  { stat: Attribute.Smarts, dieType: DieType.D10 },
];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Repair,
    dieType: DieType.D8,
  },
  {
    skill: Skill.WeirdScience,
    dieType: DieType.D8,
  },
  {
    skill: Skill.KnowledgeScience,
    dieType: DieType.D6,
  },
  {
    skill: Skill.KnowledgeScience,
    dieType: DieType.D6,
  },
];

const EdgeRequirements: Edge[] = [Edge.ArcaneBackgroundWeirdScience];

export const MrFixIt: EdgeDetailType = {
  key: Edge.MrFixIt,
  name: "Mr. Fix It",
  category: EdgeCategory.Professional,
  description:
    "The inventor adds +2 to Repair rolls. With a raise, she halves the time normally required to fix something.",
  description_short: "+2 to Repair rolls, halve time on Raise",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
