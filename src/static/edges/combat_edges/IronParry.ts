import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { SkillRequirement, StatRequirement } from "../../../utils/types";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.BlockImproved];

export const IronParry: EdgeDetailType = {
  key: Edge.IronParry,
  name: "Iron Parry",
  category: EdgeCategory.Combat,
  description:
    "Some fighters can bust up an opponent pretty bad just by blocking an attack. If an opponent fails a Fighting roll against your character, the opponent suffers the damage instead.",
  description_short:
    "Missing a Fighting roll against you instead deals the damage to the attacker.",
  rank_requirement: Rank.Heroic,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
