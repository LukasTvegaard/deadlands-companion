import { DieType, Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Shooting,
    dieType: DieType.D10,
  },
];

const EdgeRequirements: Edge[] = [];

export const HipShootingImproved: EdgeDetailType = {
  key: Edge.HipShootingImproved,
  name: "Hip-Shooting (Improved)",
  category: EdgeCategory.Combat,
  description:
    "Your hero has fanning down to a fine art. They suffer no penalty when fanning the hammer.",
  description_short: "No penalty when fanning the hammer.",
  rank_requirement: Rank.Heroic,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [], // MISSING: Conditional effect
};
