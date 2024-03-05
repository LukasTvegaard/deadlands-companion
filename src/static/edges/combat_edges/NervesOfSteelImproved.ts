import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.NervesOfSteel];

export const NervesOfSteelImproved: EdgeDetailType = {
  key: Edge.NervesOfSteelImproved,
  name: "Nerves of Steel (Improved)",
  category: EdgeCategory.Combat,
  description:
    "Your hero has learned to fight on through the most intense pain. They may ignore an additional 1 point of wound penalties.",
  description_short: "Ignore an additional 1 point of Wound penalties.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
