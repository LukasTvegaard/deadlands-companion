import { DieType, Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Fighting,
    dieType: DieType.D10,
  },
];

const EdgeRequirements: Edge[] = [];

export const Frenzy: EdgeDetailType = {
  key: Edge.Frenzy,
  name: "Frenzy",
  category: EdgeCategory.Combat,
  description:
    "Frenzied fighters make fast and furious melee attacks, sacrificing finesse for raw speed. This allows them to make an extra Fighting attack per round at a -2 penalty to all Fighting rolls. This attack must be taken at the same time as another FIghting attack. Wild Cards roll two Fighting dice and one Wild Die.",
  description_short:
    "Can perform an additional Fighting attack each turn at the cost of -2 to all Fighting rolls.",
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [], // MISSING: Add frenzy toggle to melee weapons.
};
