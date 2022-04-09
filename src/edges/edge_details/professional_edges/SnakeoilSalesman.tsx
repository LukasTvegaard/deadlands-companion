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

const StatRequirements: StatRequirement[] = [
  { stat: Stat.Smarts, dieType: DieType.d6 },
  { stat: Stat.Spirit, dieType: DieType.d6 },
];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Persuasion,
    dieType: DieType.d8,
  },
];

const EdgeRequirements: Edge[] = [];

export const SnakeoilSalesman: EdgeDetail = {
  key: Edge.SnakeoilSalesman,
  name: "Snakeoil Salesman",
  category: EdgeCategory.Professional,
  description:
    "With honey-dewed lips that weave lies and fabrications like they were the Gospel truth, this smooth talker could sell salt to the Mormons and buffalo hides to Indians. The character gains a +2 bonus to noncombat Persuasion rolls. He can also use his forked tongue to initiate a Persuasion Test of Will, opposed by the target's Smarts",
  description_short:
    "+2 to Persuasion rolls, can use Persuasion for Test of Will (vs. target's Smarts)",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
