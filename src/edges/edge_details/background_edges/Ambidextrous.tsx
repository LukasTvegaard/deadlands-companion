import { DieType, Edge, EdgeCategory, Rank, Stat } from "../../../utils/enums";
import { EdgeDetail } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [
  {
    stat: Stat.Agility,
    dieType: DieType.d8,
  },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Ambidextrous: EdgeDetail = {
  key: Edge.Ambidextrous,
  name: "Ambidextrous",
  category: EdgeCategory.Background,
  description:
    "You hero is as deft with her left hand as she is with her right. Characters normally suffer a -2 penalty when performing physical tasks with the off-hand (characters are assumed to be right-handed). With this Edge, your warrior ignores the -2 penalty for using her off-hand.",
  description_short: "Ignore -2 penalty for off-hand actions",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
