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
  { stat: Attribute.Agility, dieType: DieType.D6 },
];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Fighting,
    dieType: DieType.D8,
  },
  {
    skill: Skill.Taunt,
    dieType: DieType.D6,
  },
];

const EdgeRequirements: Edge[] = [Edge.FirstStrike];

export const TenTigerPunch: EdgeDetailType = {
  key: Edge.TenTigerPunch,
  name: "Ten-Tiger Punch",
  category: EdgeCategory.Combat,
  description:
    "Your hero is as threatening as a lion or as tricky as a panther. Either way, they can put their catlike qualities to good use in a fight. If they succeed in a Test of Will against an adjacent opponent, they can immediately make a free Fighting attack against that opponent.",
  description_short:
    "Succeeding on a Test of Wills against an adjacent opponent lets you immediately make a Fighting attack against them for free.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
