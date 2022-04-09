import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Skill,
  Stat,
} from "../../../utils/enums";
import { EdgeDetail } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [
  { stat: Stat.Spirit, dieType: DieType.d8 },
  { stat: Stat.Strength, dieType: DieType.d6 },
  { stat: Stat.Vigor, dieType: DieType.d8 },
];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Faith,
    dieType: DieType.d6,
  },
  { skill: Skill.Fighting, dieType: DieType.d8 },
];

const EdgeRequirements: Edge[] = [Edge.ArcaneBackgroundMiracles];

export const Champion: EdgeDetail = {
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
};
