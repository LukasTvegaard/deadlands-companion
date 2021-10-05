import { Rank } from "../enums";
import { StatRequirement, SkillRequirement } from "../types";

export interface Edge {
  name: string;
  description: string;
  description_short: string;
  rank_requirement: Rank;
  stat_requirements: StatRequirement[];
  skill_requirements: SkillRequirement[];
  edge_requirements: string[];
}
