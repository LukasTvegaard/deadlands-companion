import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Reputation: EdgeDetailType = {
  key: Edge.Reputation,
  name: "Reputation",
  category: EdgeCategory.Social,
  description: `Whether the character is branded a hero or
    villain, he has earned a reputation across the
    West. He may add his Charisma to Intimida-
    tion rolls. A negative score is treated as posi-
    tive for this purpose (and the character has a
    bad reputation).`,
  description_short:
    "Add Charisma to your Intimidation rolls. Negative Charisma counts as positive.",
  rank_requirement: Rank.Veteran,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
