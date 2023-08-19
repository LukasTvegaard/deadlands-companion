import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.Extraction];

export const ExtractionImproved: EdgeDetailType = {
  key: Edge.ExtractionImproved,
  name: "Extraction (Improved)",
  category: EdgeCategory.Combat,
  description:
    "If your extraction succeeds with a raise, all opponents in melee with your character lose their free attack.",
  description_short:
    "Raise on extraction roll causes all opponents to lose their free attack.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
