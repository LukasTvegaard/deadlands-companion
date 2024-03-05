import { DieType, Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Shooting,
    dieType: DieType.D8,
  },
];

const EdgeRequirements: Edge[] = [];

export const HipShooting: EdgeDetailType = {
  key: Edge.HipShooting,
  name: "Hip-Shooting",
  category: EdgeCategory.Combat,
  description:
    "Your hero is a natural hip-shooter. They suffer only a -2 to their Shooting rolls when fanning the hammer.",
  description_short: "Reduce fan the hammer penalty to -2",
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [], // MISSING: Conditional effect
};
