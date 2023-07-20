import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.Brawler];

export const Bruiser: EdgeDetailType = {
  key: Edge.Bruiser,
  name: "Bruiser",
  category: EdgeCategory.Combat,
  description:
    "When the bruiser gets a raise on this bare-handed Fighting attack, he rolls a d8 instead of a d6.",
  description_short:
    "Roll d8 instead of d6 on raise when attacking bare-handed",
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
