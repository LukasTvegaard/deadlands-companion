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

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Fighting,
    dieType: DieType.D8,
  },
];

const EdgeRequirements: Edge[] = [];

export const Counterattack: EdgeDetailType = {
  key: Edge.Counterattack,
  name: "Counterattack",
  category: EdgeCategory.Combat,
  description:
    "Fighters with this Edge know how to respond instantly to an enemy's mistakes. Once per round (if not shaken), the character receives one free Fighting attack against one adjacent foe who failed a Fighting attack against him. This attack is made at -2, must be a normal attack, and may not be combined with Frenzy or Sweep. It may be used with the Defend maneuver, but not Full Defense.",
  description_short:
    "Allows one free Fighting attack per round against adjacent enemy that has failed a Fighting attack against you. Attack is made at -2 penalty.",
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
