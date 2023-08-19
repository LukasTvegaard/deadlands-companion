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
  { stat: Attribute.Agility, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const FirstStrike: EdgeDetailType = {
  key: Edge.FirstStrike,
  name: "First Strike",
  category: EdgeCategory.Combat,
  description:
    "Once per turn the hero (if not Shaken) gets a free Fighting attack against a single foe who moves adjacent to them.",
  description_short:
    "Once per turn, make a free Fighting attack against any opponent moving into melee range of you.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
