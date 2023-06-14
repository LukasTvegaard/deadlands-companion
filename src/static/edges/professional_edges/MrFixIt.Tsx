import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Skill,
  Stat,
} from "../../../utils/enums";
import { EdgeDetail } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [
  { stat: Stat.Smarts, dieType: DieType.d10 },
];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Repair,
    dieType: DieType.d8,
  },
  {
    skill: Skill.WeirdScience,
    dieType: DieType.d8,
  },
  {
    skill: Skill.KnowledgeScience,
    dieType: DieType.d6,
  },
  {
    skill: Skill.KnowledgeScience,
    dieType: DieType.d6,
  },
];

const EdgeRequirements: Edge[] = [Edge.ArcaneBackgroundWeirdScience];

export const MrFixIt: EdgeDetail = {
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
};
