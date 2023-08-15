import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Skill,
  Attribute,
} from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const NewPower: EdgeDetailType = {
  key: Edge.NewPower,
  name: "New Power",
  category: EdgeCategory.Powers,
  description:
    "An arcane character may learn a new power by choosing this Edge (Which may be taken multiple times). She may choose from any powers normally available to her particular Arcane Background",
  description_short: "Learn a new Power",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
