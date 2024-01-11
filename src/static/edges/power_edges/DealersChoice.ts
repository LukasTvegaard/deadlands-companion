import { DieType, Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  { skill: Skill.Spellcasting, dieType: DieType.D6 },
];

const EdgeRequirements: Edge[] = [Edge.ArcaneBackgroundMagic];

export const DealersChoice: EdgeDetailType = {
  key: Edge.DealersChoice,
  name: "Dealer's Choice",
  category: EdgeCategory.Powers,
  description:
    "Any time you are dealt a card for any reason, after you have looked at it you can choose to spend a Fate Chip to discard it and draw another card.",
  description_short:
    "Allows spending a Fate Chip to redraw any card you are dealt.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
