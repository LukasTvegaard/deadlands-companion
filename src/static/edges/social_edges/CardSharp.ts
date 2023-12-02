import { DieType, Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  { skill: Skill.Gambling, dieType: DieType.D6 },
];

const EdgeRequirements: Edge[] = [];

export const CardSharp: EdgeDetailType = {
  key: Edge.CardSharp,
  name: "Card Sharp",
  category: EdgeCategory.Social,
  description:
    "You only ever get caught cheating on a roll of snake eyes, unless the people trying to detect your cheating also have the Card Sharp edge. Trying to spot any Huckster power you cast is done at -2.",
  description_short:
    "Only get caught cheating by people without the Card Sharp edge on Snake Eyes. People trying to detect your huckster magic suffer -2 to the roll.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
