import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.ArcaneBackgroundWeirdScience];

export const KnackBornOnAllHallowsEve: EdgeDetailType = {
  key: Edge.KnackBornOnAllHallowsEve,
  name: "Knack - Born on All Hallow's Eve",
  category: EdgeCategory.Weird,
  description:
    "When taking the 'New Power' edge, a Weird Scientist with this knack can discard a Fate Chip and make a Spirit roll. If the spirit roll is successful, the Scientist avoids gaining a dementia.",
  description_short:
    "Make a spirit roll when taking a New Power. If successful, avoid gaining a dementia.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
