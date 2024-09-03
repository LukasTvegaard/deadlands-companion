import { DieType, Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Fighting,
    dieType: DieType.D6,
  },
];

const EdgeRequirements: Edge[] = [];

export const MartialArtist: EdgeDetailType = {
  key: Edge.MartialArtist,
  name: "Martial Artist",
  category: EdgeCategory.Combat,
  description:
    "You have trained in martial arts or boxing, or learned to street fight really dirty. Your character's body is a finely honed weapon, so even when your hero fights unarmed, they are considered armed. In addition, opponents in melee combat never benefit from any gang up bonus against your hero.",
  description_short:
    "Attacks do not receive gang-up bonuses. Considered armed when unarmed.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
