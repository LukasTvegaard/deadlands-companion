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
  { stat: Attribute.Smarts, dieType: DieType.D6 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const ImprovisationalFighter: EdgeDetailType = {
  key: Edge.ImprovisationalFighter,
  name: "Improvisational Fighter",
  category: EdgeCategory.Combat,
  description:
    "Your hero has a knack for using improvised weaponry. They ignore the usual -1 penalty when wielding them.",
  description_short: "Ignore penalty when using improvised weapons.",
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
