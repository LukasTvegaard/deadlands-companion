import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Attribute,
} from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [
  {
    stat: Attribute.Smarts,
    dieType: DieType.D6,
  },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Linguist: EdgeDetailType = {
  key: Edge.Linguist,
  name: "Linguist",
  category: EdgeCategory.Background,
  description:
    "The character has an ear for languages and a rare talent for recognizing similarities between them. A character with this Edge starts with a number of languages equal to her Smarts die, and can make a Smarts roll at -2 to make herself understood in any language or dialect she has heard spoken for at least a week.",
  description_short:
    "Know languages equal to Smarts die, can communicate in any language after hearing for a week.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
