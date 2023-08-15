import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Luck: EdgeDetailType = {
  key: Edge.Luck,
  name: "Luck",
  category: EdgeCategory.Background,
  description:
    "The adventurer seems to be blessed by fate, karma, the gods, or whatever external forces he believes in. He draws one extra Banny at the beginning of each game session, allowing him to succeed at important tasks more often than most, and survive incredible dangers.",
  description_short: "Draw one extra Benny each session",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
