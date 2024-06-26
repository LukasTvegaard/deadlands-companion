import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.Rich];

export const RichFilthy: EdgeDetailType = {
  key: Edge.RichFilthy,
  name: "Rich (Filthy)",
  category: EdgeCategory.Background,
  description:
    "This character is very wealthy. She has five times the starting funds. The character needs a very complete background, to be worked out with the GM, as such wealth comes with many more assets as well as onerous responsibilities.",
  description_short:
    "Start with 5x normal money, as well as additional assets and responsibilities.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
