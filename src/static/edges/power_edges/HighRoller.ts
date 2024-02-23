import { DieType, Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  { skill: Skill.Spellcasting, dieType: DieType.D6 },
  { skill: Skill.Guts, dieType: DieType.D8 },
];

const EdgeRequirements: Edge[] = [Edge.ArcaneBackgroundMagic];

export const HighRoller: EdgeDetailType = {
  key: Edge.HighRoller,
  name: "High Roller",
  category: EdgeCategory.Powers,
  description: `Go high or go home is
    your motto. You don’t bother
    with lesser manitous. When
    dealing with the devil, your
    hombre draws an extra card. He may still only
    use five cards to form the hand, but now he
    has more choices.`,
  description_short: `Draw an extra card when dealing with the Devil`,
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
