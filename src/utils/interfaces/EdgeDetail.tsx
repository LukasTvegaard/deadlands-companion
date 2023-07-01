import { Rank, Edge, EdgeCategory } from "../enums";
import { StatRequirement, SkillRequirement } from "../types";
import { Effect } from "../types/Effect";

export interface EdgeDetailType {
  key: Edge;
  name: string;
  category: EdgeCategory;
  description: string;
  description_short: string;
  effects?: Effect[];
  rank_requirement: Rank;
  stat_requirements: StatRequirement[];
  skill_requirements: SkillRequirement[];
  edge_requirements: Edge[];
}
