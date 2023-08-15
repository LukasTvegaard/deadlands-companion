import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const ArcaneBackgroundMiracles: EdgeDetailType = {
  key: Edge.ArcaneBackgroundMiracles,
  name: "Arcane Background (Miracles)",
  category: EdgeCategory.Background,
  description:
    "Certain characters can call upon the power of their deity (or deities) for aid. In the Weird West, these pious souls are called the blessed. Blessed are nuns, priests, or even average but (relatively) pure-hearted folk blessed by a divine entity. Though rare in the Weird West, there are also blessed imams, Buddhist monks, and other of faith running around with higher powers covering the holy backsides. When these folks behave themselves, they can sometimes invoke miracles to help them fight the evils of the weird West. If you choose to take this Edge, be sure read the appropriate details in the Deadlands Player's Handbook.",
  description_short: "Arcane Background for Blessed",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
