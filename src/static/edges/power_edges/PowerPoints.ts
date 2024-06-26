import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

const PowerPoints = {
  category: EdgeCategory.Powers,
  description:
    "Wizards, weird scientists and other arcane types always want more power. This Edge grants them an additional 5 Power Points. This Edge may be selected more than once, but only once per Rank.",
  description_short: "Gain 5 additional Power Points",
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};

export const PowerPointsNovice: EdgeDetailType = {
  ...PowerPoints,
  key: Edge.PowerPoints_novice,
  name: "Power Points (Novice)",
  rank_requirement: Rank.Novice,
};

export const PowerPointsSeasoned: EdgeDetailType = {
  ...PowerPoints,
  key: Edge.PowerPoints_seasoned,
  name: "Power Points (Seasoned)",
  rank_requirement: Rank.Seasoned,
};
export const PowerPointsVeteran: EdgeDetailType = {
  ...PowerPoints,
  key: Edge.PowerPoints_veteran,
  name: "Power Points (Veteran)",
  rank_requirement: Rank.Veteran,
};

export const PowerPointsHeroic: EdgeDetailType = {
  ...PowerPoints,
  key: Edge.PowerPoints_heroic,
  name: "Power Points (Heroic)",
  rank_requirement: Rank.Heroic,
};
export const PowerPointsLegendary: EdgeDetailType = {
  ...PowerPoints,
  key: Edge.PowerPoints_legendary,
  name: "Power Points (Legendary)",
  rank_requirement: Rank.Legendary,
};
