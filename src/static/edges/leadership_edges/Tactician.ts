import {
  Attribute,
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Skill,
} from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [
  { stat: Attribute.Smarts, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [
  { skill: Skill.KnowledgeBattle, dieType: DieType.D6 },
];

const EdgeRequirements: Edge[] = [Edge.Command];

export const Tactician: EdgeDetailType = {
  key: Edge.Tactician,
  name: "Tactician",
  category: EdgeCategory.Leadership,
  description:
    " At the beginning of a fight and before any Action Cards are dealt, the hero makes a Knowledge (Battle) roll. For each success and raise they receive one Action Card. These are kept separate from their regular Action Cards and are not placed back into the deck until used or the combat ends (including Jokers!). At the start of any round, the hero may give one or more of these extra cards to their allies, whether Extras or Wild Cards, who then use it as their Action Card for the round in place of the one dealt them.",
  description_short: `Draw Action Cards equal to successes on a Knowledge: Battle roll at the start of combat. These Action Cards may be given to allies within Command radius to use instead of their drawn Action Card.`,
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
