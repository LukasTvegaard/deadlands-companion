import {
  Attribute,
  DieType,
  Edge,
  EdgeCategory,
  Rank,
} from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [
  { stat: Attribute.Spirit, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.Command];

export const Fervor: EdgeDetailType = {
  key: Edge.Fervor,
  name: "Fervor",
  category: EdgeCategory.Leadership,
  description:
    "A simple phrase uttered by a great leader can sometimes have momentous results. A leader with this ability can inspire his men to bloody fervor by yelling a motto, slogan, or other inspirational words. Those in the command radius add +1 to their Fighting damage rolls.",
  description_short: `Allies within Command radius add +1 to their Fighting damage rolls.`,
  rank_requirement: Rank.Veteran,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
