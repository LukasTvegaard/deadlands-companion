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

const EdgeRequirements: Edge[] = [Edge.Dodge];

export const DodgeImproved: EdgeDetailType = {
  key: Edge.DodgeImproved,
  name: "Dodge (Improved)",
  category: EdgeCategory.Combat,
  description:
    "Attackers must subtract additonal 1 from their ranged attack rolls when targeting your cowpoke. If your cowpoke attempts to evade area effect attacks, he may add an additonal +1 to his Agility roll as well (when allowed)",
  description_short:
    "Attackers have an additional -1 penalty to ranged attacks against you, and you gain an additional +1 to evading area effect weapons",
  rank_requirement: Rank.Veteran,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
