import { DieType, Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetail } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Fighting,
    dieType: DieType.d8,
  },
  {
    skill: Skill.Notice,
    dieType: DieType.d10,
  },
];

const EdgeRequirements: Edge[] = [Edge.ArcaneBackgroundChiMastery];

export const BlindFighting: EdgeDetail = {
  key: Edge.BlindFighting,
  name: "Blind Fighting",
  category: EdgeCategory.Background,
  description: "",
  description_short: "",
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
