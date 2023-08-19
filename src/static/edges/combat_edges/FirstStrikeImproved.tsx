import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.FirstStrike];

export const FirstStrikeImproved: EdgeDetailType = {
  key: Edge.FirstStrikeImproved,
  name: "First Strike (Improved)",
  category: EdgeCategory.Combat,
  description:
    "Your hero is allowed to make a First Strike attack against each and every foe who moves adjacent to them.",
  description_short: "Unlimited First Strike attacks each round.",
  rank_requirement: Rank.Heroic,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
