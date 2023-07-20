import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Skill,
  Attribute,
} from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const CombatReflexes: EdgeDetailType = {
  key: Edge.CombatReflexes,
  name: "Combat Reflexes",
  category: EdgeCategory.Combat,
  description:
    "Your adventurer recovers quickly from shock and trauma. He adds +2 to his Spirit roll when attempting to recover from being Shaken.",
  description_short: "+2 to recover from Shaken",
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
