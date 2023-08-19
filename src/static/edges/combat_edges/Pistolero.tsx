import { DieType, Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Shooting,
    dieType: DieType.D10,
  },
];

const EdgeRequirements: Edge[] = [Edge.Marksman, Edge.TwoFisted];

export const Pistolero: EdgeDetailType = {
  key: Edge.Pistolero,
  name: "Pistolero",
  category: EdgeCategory.Combat,
  description:
    "A gunslinger with this Edge can fire two weapons with accuracy or speed. They can either use Marksman against two separate targets, or they can fire double-action pistols as if they had RoF 2.",
  description_short:
    "Apply Marksman against two separate targets or fire double-action pistols as if they had RoF 2.",
  rank_requirement: Rank.Veteran,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [], // MISSING: Add pistolero toggle to double-action weapons
};
