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
  { stat: Stat.Smarts, dieType: DieType.d8 },
];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Repair,
    dieType: DieType.d8,
  },
  { skill: Skill.WeirdScience, dieType: DieType.d8 },
  { skill: Skill.KnowledgeScience, dieType: DieType.d6 },
  { skill: Skill.KnowledgeScience, dieType: DieType.d6 },
];

const EdgeRequirements: Edge[] = [Edge.ArcaneBackgroundWeirdScience];

export const Gadgeteer: EdgeDetail = {
  key: Edge.Gadgeteer,
  name: "Gadgeteer",
  category: EdgeCategory.Professional,
  description:
    "These mechanical gurus are so technically savvy they can quickly build a machine to handle nearly any situation. Once per game session, a gadgeteer can create a \"juryrigged\" device from spare parts. The device functions just like any other Weird Science device, and uses any power available to Weird Scientists (still subject to inventor's Rank restrictions). It has half the inventor's Power Points, and once these are used up, the gadget burns out and does not recharge. The inventor must have access to some parts and a reasonable amount of time (at least 20 minutes) to create the gizmo.",
  description_short:
    "Once per game session, allow constructing improvised device that can cast any power available to Weird Scientists.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
