import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Attribute,
} from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [
  { stat: Attribute.Smarts, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const LevelHeaded: EdgeDetailType = {
  key: Edge.LevelHeaded,
  name: "Level Headed",
  category: EdgeCategory.Combat,
  description:
    "Fighters who can keep their cool when everyone else is running for cover are deadly customers in combat. A hero with this Edge draws an additional Initiative Card in combat and acts on the best of the two.",
  description_short:
    "Draw one more Initiative Card and act on the best of the two.",
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
