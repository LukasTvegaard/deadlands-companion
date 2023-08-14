import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { DerivedStat } from "../../../utils/enums/DerivedStat";
import { EdgeDetailType } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";
import { EffectVariant } from "../../../utils/types/Effect";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.Attractive];

export const AttractiveVery: EdgeDetailType = {
  key: Edge.AttractiveVery,
  name: "Attractive (Very)",
  category: EdgeCategory.Background,
  description:
    "Your hero is drop-dead gorgeous. His or her Charisma is increased by an additional 2.",
  description_short: "+2 Charisma",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [
    {
      target: DerivedStat.Charisma,
      effectVariant: EffectVariant.ModifyFlat,
      value: 2,
    },
  ],
};
