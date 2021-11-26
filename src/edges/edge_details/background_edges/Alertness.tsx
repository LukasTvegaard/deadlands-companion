import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetail } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Alertness: EdgeDetail = {
  key: Edge.Alertness,
  name: "Alertness",
  category: EdgeCategory.Background,
  description:
    "Not much gets by your hero. He's very observant and perceptive, and adds +2 to his Notice rolls to hear, see, or otherwise sense the world around him.",
  description_short: "Notice +2",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
