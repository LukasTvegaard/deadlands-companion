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
  { stat: Attribute.Agility, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.ArcaneBackgroundChiMastery];

export const MovementOfTheSerpent: EdgeDetailType = {
  key: Edge.MovementOfTheSerpent,
  name: "Movement of the Serpent",
  category: EdgeCategory.Combat,
  description:
    "Your hero's about as slippery as a greased pig. A character with this Edge can Withdraw from Combat without giving any adjacent opponents a free attack.",
  description_short: "Never trigger free attacks from moving out of melee.",
  rank_requirement: Rank.Veteran,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
