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
  { stat: Attribute.Smarts, dieType: DieType.d6 },
];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Repair,
    dieType: DieType.d6,
  },
  {
    skill: Skill.Notice,
    dieType: DieType.d8,
  },
];

const EdgeRequirements: Edge[] = [];

export const McGyver: EdgeDetailType = {
  key: Edge.McGyver,
  name: "McGyver",
  category: EdgeCategory.Professional,
  description:
    "This character can improvise something when the need for a tool arises. They suffer no negative penalties on Trait rolls for lack of equipment in most situations. In addition, given a few simple tools, props, or devices, they can generally rig devices to help escape from death-traps, weapons to match some bizarre need, or otherwise create something that's needed when such a thing isn't actually present. The extent of this is completely up to the Game Master, but creativity is rewarded, particularly in dire situations where few other answers are possible.",
  description_short:
    "Allows improvising something when the need for a tool arises.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
