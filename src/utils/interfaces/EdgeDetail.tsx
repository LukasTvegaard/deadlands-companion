import { Rank, Edge, EdgeCategory } from "../enums";
import { StatRequirement, SkillRequirement } from "../types";
import { Effecting } from "../types/Effect";

export interface EdgeDetailType extends Effecting {
  key: Edge;
  name: string;
  category: EdgeCategory;
  description: string;
  description_short: string;
  rank_requirement: Rank;
  stat_requirements: StatRequirement[];
  skill_requirements: SkillRequirement[];
  edge_requirements: Edge[];
}
