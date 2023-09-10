import { DieType, Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  { skill: Skill.KnowledgeScience, dieType: DieType.D8 },
];

const EdgeRequirements: Edge[] = [Edge.ArcaneBackgroundWeirdScience];

export const Alchemy: EdgeDetailType = {
  key: Edge.Alchemy,
  name: "Alchemy",
  category: EdgeCategory.Powers,
  description:
    "An alchemist character has half their normal Power Points per known power to divide among as many potions as they wish. Extra points may be put into a potion to maintain the duration up to a predetermined limit. The alchemist can brew potions for each power they know. Power Points are 'tied up' in a potion until it is used. Brewing a potion requires a chemistry set along with $3 per power point worth of ingredients and 30 minutes per potion. At the end of the brewing process, the alchemist must make a Weird Science roll. Failure means the potion is ruined and the materials are lost. Success indicates it will work when used, and raises work as usual. Attack powers require a Throwing roll to hit (range of 3/6/12).",
  description_short:
    "Allows the Weird Scientist to tie up half of their power points per power into potions.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
