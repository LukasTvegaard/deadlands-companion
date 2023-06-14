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
  { stat: Attribute.Agility, dieType: DieType.d8 },
];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Climbing,
    dieType: DieType.d6,
  },
  { skill: Skill.Lockpicking, dieType: DieType.d6 },
  { skill: Skill.Stealth, dieType: DieType.d8 },
];

const EdgeRequirements: Edge[] = [];

export const Thief: EdgeDetailType = {
  key: Edge.Thief,
  name: "Thief",
  category: EdgeCategory.Professional,
  description:
    "Thieves specialize in deceit, treachery, and acrobatics. They can be invaluable where traps must be detected, walls must be climbed, and locks must be picked. Thieves add +2 to Climbing, Lockpick, Stealth, as well as Notice or Repair rolls that relate to traps. The stealth bonus only applies in Urban areas.",
  description_short:
    "+2 to Climbing rolls and Lockpicking rolls, +2 to Stealth rolls in Urban areas, +2 to Notice and Repair rolls related to traps.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
