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
    stat: Attribute.Strength,
    dieType: DieType.D6,
  },
  {
    stat: Attribute.Vigor,
    dieType: DieType.D6,
  },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Brawny: EdgeDetailType = {
  key: Edge.Brawny,
  name: "Brawny",
  category: EdgeCategory.Background,
  description:
    "Your bruiser is very large or perhaps just very fit. His bulk resists damage better than most and adds +1 to his Toughness. In addition, the character can carry more than most proportional to his Strength. He can carry 8 times his Strength in pounds without penalty ",
  description_short: "+1 Toughness",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
