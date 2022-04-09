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

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const JackOfAllTrades: EdgeDetail = {
  key: Edge.JackOfAllTrades,
  name: "Jack-of-All-Trades",
  category: EdgeCategory.Professional,
  description:
    "Through advances schooling, book-learning, or just amazing intuitive perception, you hero has a talent for picking up skills on the fly. There is little she can't figure out given a little time and a dash of luck. Any time she makes an unskilled roll for a Smarts-based skill, she may do so at d4 instead of the usual d4-2",
  description_short:
    "Unskilled rolls for Smarts-based skills are made at d4 instead of d4-2",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
