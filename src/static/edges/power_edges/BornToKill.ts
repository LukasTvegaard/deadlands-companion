import { DieType, Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  { skill: Skill.Spellcasting, dieType: DieType.D6 },
];

const EdgeRequirements: Edge[] = [Edge.ArcaneBackgroundHexslinger];

export const BornToKill: EdgeDetailType = {
  key: Edge.BornToKill,
  name: "Born to Kill",
  category: EdgeCategory.Powers,
  description:
    "When a hexslinger takes the Born to Kill Edge, it allows them to maintain the 'Aim', 'Boost Shooting' and 'Smite' powers on their chosen item with no penalty to other Spellcasting rolls, although they must still pay the Power Point cost.",
  description_short:
    "Maintain 'Aim', 'Boost Shooting' and 'Smite' without penalty to other spellcasting rolls.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
