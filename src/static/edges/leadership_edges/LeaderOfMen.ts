import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.Command];

export const LeaderOfMen: EdgeDetailType = {
  key: Edge.LeaderOfMen,
  name: "Leader of Men",
  category: EdgeCategory.Leadership,
  description: `
    Command comes easy to this commander. Those under his command work like a well-oiled machine when they are in charge. Allies under the leader's command roll a d10 as the Wild Die instead of a d6 when making group rolls.`,
  description_short: `Allies within Command radius roll a d10 as the Wild Die when making group rolls.`,
  rank_requirement: Rank.Veteran,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
