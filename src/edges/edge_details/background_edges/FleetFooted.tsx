import { DieType, Edge, EdgeCategory, Rank, Stat } from "../../../utils/enums";
import { EdgeDetail } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [
  {
    stat: Stat.Agility,
    dieType: DieType.d6,
  },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const FleetFooted: EdgeDetail = {
  key: Edge.FleetFooted,
  name: "Fleet-Footed",
  category: EdgeCategory.Background,
  description:
    "The hero's pace is increased by +2 and he rolls a d10 instead of a d6 when running.",
  description_short: "+2 pace, d10 instead of d6 when sprinting",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
