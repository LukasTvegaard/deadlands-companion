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
  { stat: Attribute.Agility, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Climbing,
    dieType: DieType.D6,
  },
  {
    skill: Skill.Fighting,
    dieType: DieType.D6,
  },
  {
    skill: Skill.Stealth,
    dieType: DieType.D8,
  },
];

const EdgeRequirements: Edge[] = [];

export const Assassin: EdgeDetailType = {
  key: Edge.Assassin,
  name: "Assassin",
  category: EdgeCategory.Professional,
  description:
    "Assassins are trained killers who know how to kill with deadly precision - if they can properly approach their prey. Assassins add +2 to any damage roll where they strike a foe unawares (even with ranged attacks).",
  description_short: "+2 damage when attacking unaware target",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [], // MISSING: Add sneak attack action to weapons
};
