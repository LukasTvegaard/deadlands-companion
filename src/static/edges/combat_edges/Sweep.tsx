import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Skill,
  Attribute,
} from "../../../utils/enums";
import { SkillRequirement, StatRequirement } from "../../../utils/types";
import { EdgeDetailType } from "./../../../utils/interfaces/EdgeDetail";

const StatRequirements: StatRequirement[] = [
  { stat: Attribute.Strength, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Fighting,
    dieType: DieType.D8,
  },
];

const EdgeRequirements: Edge[] = [];

export const Sweep: EdgeDetailType = {
  key: Edge.Sweep,
  name: "Sweep",
  category: EdgeCategory.Combat,
  description:
    "Sweep allows a character to make a single Fighting attack against all adjacent targets at a -2 penalty once per round. Sweep hits both allies and enemies.",
  description_short:
    "Attack all adjacent units at a -2 penalty once per round.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [], // MISSING: Add sweep toggle to melee weapons.
};
