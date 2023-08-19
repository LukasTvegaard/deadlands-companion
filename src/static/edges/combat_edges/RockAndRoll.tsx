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

export const RockAndRoll: EdgeDetailType = {
  key: Edge.RockAndRoll,
  name: "Rock and Roll!",
  category: EdgeCategory.Combat,
  description:
    "Some veteran shooters learn to compensate for the recoil of fully automatic weapons. If a character with this Edge does not move, they may ignore the recoil penalty for firing a weapon on full automatic.",
  description_short:
    "Ignore recoil penalty of full-auto weapons when not moving.",
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [], // MISSING: Add Rock and Roll toggle on RoF 2+ weapons.
};
