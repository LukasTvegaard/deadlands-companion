import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.ArcaneResistance];

export const ArcaneResistanceImproved: EdgeDetailType = {
  key: Edge.ArcaneResistanceImproved,
  name: "Arcane Resistance (Improved)",
  category: EdgeCategory.Background,
  description:
    "As Arcane Resistance, but Armor and resistance are increased to 4",
  description_short:
    "+4 armor vs. magic, +4 trait rolls vs. magic, -4 to friendly magic",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
