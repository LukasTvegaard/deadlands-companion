import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Marksman: EdgeDetailType = {
  key: Edge.Marksman,
  name: "Marksman",
  category: EdgeCategory.Combat,
  description:
    "Your hero excels at taking controlled, measured shots. If they do not move in a turn, they may add +2 to their Shooting roll. Aim can not be used with a rate of fire greater than 1.",
  description_short:
    "+2 Shooting if you don't move and only fire a single shot during the turn.",
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [], // MISSING: Add Marksman toggle to weapons
};
