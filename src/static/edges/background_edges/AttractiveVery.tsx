import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.Attractive];

export const AttractiveVery: EdgeDetailType = {
  key: Edge.AttractiveVery,
  name: "Attractive (Very)",
  category: EdgeCategory.Background,
  description:
    "Your hero is drop-dead gorgeous. His or her Charisma is increased to +4.",
  description_short: "+4 Charisma",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
