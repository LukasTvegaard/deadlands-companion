import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Rich: EdgeDetailType = {
  key: Edge.Rich,
  name: "Rich",
  category: EdgeCategory.Background,
  description:
    "Whether the individual was born with a silver spoon in his mouth or earned it through hard work, he's got more money than most. Rich heroes start with three times the normal starting funds.",
  description_short: "Start with 3x normal money",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
