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
    dieType: DieType.d8,
  },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const FastHealer: EdgeDetailType = {
  key: Edge.FastHealer,
  name: "Fast Healer",
  category: EdgeCategory.Background,
  description:
    "Some individuals just seem to heal faster than others. Those with this blessing add +2 to Vigor rolls when checking for natural healing.",
  description_short: "+2 vigor for natural healing rolls",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};