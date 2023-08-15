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
  { stat: Attribute.Strength, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Brawler: EdgeDetailType = {
  key: Edge.Brawler,
  name: "Brawler",
  category: EdgeCategory.Combat,
  description:
    "Frequent fights with his bare hands have given this thug a powerful punch. When he hits a foe with a successful bare-handed Fightning roll, he adds +2 to his damage",
  description_short: "+2 damage when attacking bare-handed",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
