import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.TrademarkWeaponShooting];

export const TrademarkWeaponShootingImproved: EdgeDetailType = {
  key: Edge.TrademarkWeaponShootingImproved,
  name: "Trademark Weapon (Shooting, Improved)",
  category: EdgeCategory.Combat,
  description: "The trademark weapon Shooting bonus is increased to +2.",
  description_short:
    "The trademark weapon bonus is increased by an additional +1.",
  rank_requirement: Rank.Veteran,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
