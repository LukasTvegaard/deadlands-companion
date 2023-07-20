import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Skill,
  Attribute,
} from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [
  { stat: Attribute.Agility, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Dodge: EdgeDetailType = {
  key: Edge.Dodge,
  name: "Dodge",
  category: EdgeCategory.Combat,
  description:
    "Some crafty types know how to get out of harm's way. This Edge allows them to use cover, movement, and concealment to make them harder to hit. Unless they are the victim of a surprise attack and taken completely unaware, attackers must subtract 1 from their ranged attack rolls when targeting them. Characters who attempt to evade area effect attacks may add +1 to their Agility roll as well (when allowed).",
  description_short:
    "Attackers have a -1 penalty to ranged attacks against you, and you gain +1 to evading area effect weapons",
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
