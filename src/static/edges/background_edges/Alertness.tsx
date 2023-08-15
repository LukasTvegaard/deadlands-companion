import { Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";
import { EffectVariant } from "../../../utils/types/Effect";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Alertness: EdgeDetailType = {
  key: Edge.Alertness,
  name: "Alertness",
  category: EdgeCategory.Background,
  description:
    "Not much gets by your hero. He's very observant and perceptive, and adds +2 to his Notice rolls to hear, see, or otherwise sense the world around him.",
  description_short: "Notice +2",
  effects: [
    {
      target: Skill.Notice,
      effectVariant: EffectVariant.ModifyFlat,
      value: 2,
    },
    {
      target: Skill.Driving,
      effectVariant: EffectVariant.ModifyDie,
      value: 10,
    },
  ],
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
