import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Skill,
  Stat,
} from "../../../utils/enums";
import { EdgeDetail } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.SilverTonguedDevil];

export const SilverTonguedDevil: EdgeDetail = {
  key: Edge.SilverTonguedDevil,
  name: "Silver-Tongued Devil",
  category: EdgeCategory.Professional,
  description:
    "Your fancypants character doesn't just have a way with oratory; he could talk a bird into giving up its feathers. With a successful Persuasion roll, this hero reduces a location's Price Modifier by 1, to a minimum of 1, for a whole day. On a raise he lowers the Price Modifier by 2.",
  description_short:
    "Successful Persuasion roll lowers price modifier of location by 1 (2 on raise)",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
