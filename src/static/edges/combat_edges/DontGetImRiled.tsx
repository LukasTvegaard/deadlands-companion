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

export const DontGetImRiled: EdgeDetailType = {
  key: Edge.DontGetImRiled,
  name: "Don't Get 'im Riled",
  category: EdgeCategory.Combat,
  description:
    "The hero with this Edge can be a real curly wolf when he gets roughed up. When causing melee damage, he adds his wound penalties to the roll. A hero with a -3 wound penalty, for instance, adds +3 to his melee damage rolls.",
  description_short: "Add wound penalties to damage rolls",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
