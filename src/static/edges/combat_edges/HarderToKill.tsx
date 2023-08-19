import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.HardToKill];

export const HarderToKill: EdgeDetailType = {
  key: Edge.HarderToKill,
  name: "Harder to Kill",
  category: EdgeCategory.Combat,
  description:
    "Your hero is tougher to kill than Rasputin. If they are ever 'killed', roll a die. On an odd result, they are dead as usual. On an even roll, they are Incapacitated but somehow escape death.",
  description_short: "50% chance to become Incapacitated instead of dying.",
  rank_requirement: Rank.Veteran,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
