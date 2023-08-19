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
  {
    stat: Attribute.Spirit,
    dieType: DieType.D8,
  },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const ArcaneResistance: EdgeDetailType = {
  key: Edge.ArcaneResistance,
  name: "Arcane Resistance",
  category: EdgeCategory.Background,
  description:
    "This individual is particularly resistant to magic whether by nature or by heritage. He acts as if he had 2 points of Armor when hit by damage-causing arcane powers, and adds +2 to his Trait rolls when resisting opposed powers. Even friendly arcane powers must subtract this modifier to affect the resistant hero.",
  description_short:
    "+2 armor vs. magic, +2 trait rolls vs. magic, -2 to friendly magic",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [], // MISSING: Conditional effect
};
