import {
  Attribute,
  DieType,
  Edge,
  EdgeCategory,
  Rank,
} from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [
  { stat: Attribute.Spirit, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const TrueGrit: EdgeDetailType = {
  key: Edge.TrueGrit,
  name: "True Grit",
  category: EdgeCategory.Social,
  description: `Some folks just seem to exude toughness,
  and your hero is one of them. The horrors of
  life in the Weird West don't faze this hombre.
  He's got gravel in his gut and ice water run-
  ning through his veins.
  Your hero's cool demeanor gives him +1
  Grit.`,
  description_short: "+1 Grit.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
