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
  { stat: Attribute.Agility, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Extraction: EdgeDetailType = {
  key: Edge.Extraction,
  name: "Extraction",
  category: EdgeCategory.Combat,
  description:
    "When a character normally withdraws from a melee, their attacker gets a free attack before they do so. You hero is adept at retreating from an engagement. Make an Agility roll. If successful, one opponent doesn't get a free attack when you disengage.",
  description_short:
    "Agility roll to avoid free attack from one opponent when disengaging from combat.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
