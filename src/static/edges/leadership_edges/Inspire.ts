import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.Command];

export const Inspire: EdgeDetailType = {
  key: Edge.Inspire,
  name: "Inspire",
  category: EdgeCategory.Leadership,
  description:
    "Leaders with exceptional reputations and experience in battle inspire the soldiers around them. They add +2 to Spirit rolls when recovering from being Shaken (this includes the original +1 bonus for the Command Edge).",
  description_short: `Allies within Command radius add an additional +1 to Spirit rolls to recover from Shaken.`,
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
