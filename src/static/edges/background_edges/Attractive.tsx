import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Attribute,
} from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [
  {
    stat: Attribute.Vigor,
    dieType: DieType.d6,
  },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Attractive: EdgeDetailType = {
  key: Edge.Attractive,
  name: "Attractive",
  category: EdgeCategory.Background,
  description:
    "It's no secret that beautiful people have an easier time getting their way in life. This Edge grants your beautiful or handsome character +2 to Charisma",
  description_short: "+2 Charisma",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
