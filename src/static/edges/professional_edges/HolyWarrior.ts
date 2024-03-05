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
];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Faith,
    dieType: DieType.D6,
  },
];

const EdgeRequirements: Edge[] = [Edge.ArcaneBackgroundMiracles];

export const HolyWarrior: EdgeDetailType = {
  key: Edge.HolyWarrior,
  name: "Holy Warrior",
  category: EdgeCategory.Professional,
  description:
    "Acolytes, clerics, paladins, holy slayers, and other avatars of the gods are frequently tasked with battling the forces of evil in the mortal world. This Edge gives them a slight advantage against such foes. As an action, a priest or other holy person may call upon his chosen deity to repulse supernaturally evil creatures. Repulsing evil costs 1 Power point and has a range of the character's Spirit. Targeted creatures within that range must make a Spirit roll. Failure means the creature is Shaken; a 1 means it is destroyed (Wild Cards suffer a wound instead).",
  description_short:
    "Spend 1 Power Point to repulse Supernaturally Evil creatures",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
