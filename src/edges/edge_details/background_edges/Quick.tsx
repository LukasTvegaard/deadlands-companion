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

export const Quick: EdgeDetail = {
  key: Edge.Quick,
  name: "Quick",
  category: EdgeCategory.Background,
  description:
    "Quick characters have lightning-fast reflexes and a cool head. Whenever you are dealt a 5 or lower in combat, you may discard and draw again until you get a card higher than 5.",
  description_short: "Redraw any initiative cards of 5 or less",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
