import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const KillerInstinct: EdgeDetailType = {
  key: Edge.KillerInstinct,
  name: "Killer Instinct",
  category: EdgeCategory.Combat,
  description:
    "This hero hates losing. If they tie on an opposed roll of any sort, they win. In addition, if their skill die on an opposed skill roll is 1, they can reroll the die once.",
  description_short:
    "Win any opposed roll that results in a tie. Reroll 1 on the skill die on an opposed skill roll once.",
  rank_requirement: Rank.Heroic,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
