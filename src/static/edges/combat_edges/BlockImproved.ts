import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { DerivedStat } from "../../../utils/enums/DerivedStat";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";
import { EffectVariant } from "../../../utils/types/Effect";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.Block];

export const BlockImproved: EdgeDetailType = {
  key: Edge.BlockImproved,
  name: "Block (Improved)",
  category: EdgeCategory.Combat,
  description: "Hero adds an addtional +1 to Parry",
  description_short: "Additional +1 Parry",
  rank_requirement: Rank.Veteran,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [
    {
      target: DerivedStat.Parry,
      effectVariant: EffectVariant.ModifyFlat,
      value: 1,
    },
  ],
};
