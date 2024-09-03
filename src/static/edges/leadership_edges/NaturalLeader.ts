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

export const NaturalLeader: EdgeDetailType = {
  key: Edge.NaturalLeader,
  name: "Natural Leader",
  category: EdgeCategory.Leadership,
  description:
    "This Edge signifies a special link between a leader and their allies. With it, they may share their Fate Chips with any ally within their Command radius.",
  description_short: `Share Fate Chips with allies inside Command radius.`,
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
