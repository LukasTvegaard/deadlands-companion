import { DieType, Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  { skill: Skill.Intimidation, dieType: DieType.D6 },
  { skill: Skill.Taunt, dieType: DieType.D6 },
];

const EdgeRequirements: Edge[] = [];

export const StrongWilled: EdgeDetailType = {
  key: Edge.StrongWilled,
  name: "Strong Willed",
  category: EdgeCategory.Social,
  description: `Characters with strong willpower use their
    voice, steely stares, or quick wits to unnerve
    their opponents. Strong Willed adds +2 to a
    character's Intimidation and Taunt rolls, as well
    as his Spirit and Smarts rolls when resisting Test
    of Wills attacks.`,
  description_short:
    "+2 to Intimidation and Taunt rolls. +2 when resisting Test of Wills.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
