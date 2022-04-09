import { DieType, Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetail } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Fighting,
    dieType: DieType.d8,
  },
];

const EdgeRequirements: Edge[] = [];

export const Block: EdgeDetail = {
  key: Edge.Block,
  name: "Block",
  category: EdgeCategory.Combat,
  description:
    "Warriors who engage in frequent hand-to-hand combat are far more skilled in personal defense than most others. They've learned not only how to attack, but how to block their opponent's blows as well. A fighter with this Edge adds +1 to her Parry.",
  description_short: "+1 Parry",
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
