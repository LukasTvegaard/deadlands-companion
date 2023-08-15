import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Skill,
  Attribute,
} from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [
  { stat: Attribute.Spirit, dieType: DieType.D8 },
  { stat: Attribute.Strength, dieType: DieType.D6 },
  { stat: Attribute.Vigor, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Faith,
    dieType: DieType.D6,
  },
  { skill: Skill.Fighting, dieType: DieType.D8 },
];

const EdgeRequirements: Edge[] = [Edge.ArcaneBackgroundMiracles];

export const Champion: EdgeDetailType = {
  key: Edge.Champion,
  name: "Champion",
  category: EdgeCategory.Professional,
  description:
    "Champions are holy men and women chosen to fight for a particular deity or religion. Most are pious souls ready and willing to lay down their lives for a greater cause, but some may have been born into the role and follow their path with some reluctance. Champions fight the forces of darkness. They add +2 damage when attacking supernaturally evil creatures, and have +2 Toughness when suffering damage from supernaturally evil sources.",
  description_short:
    "+2 damage when attacking supernaturally evil creatures, +2 Toughness when taking damage from supernaturally evil creatures",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
