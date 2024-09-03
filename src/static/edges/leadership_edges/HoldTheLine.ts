import {
  Attribute,
  DieType,
  Edge,
  EdgeCategory,
  Rank,
} from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [
  { stat: Attribute.Smarts, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.Command];

export const HoldTheLine: EdgeDetailType = {
  key: Edge.HoldTheLine,
  name: "Hold the Line!",
  category: EdgeCategory.Leadership,
  description:
    "This Edge strengthens the will of the men under the hero's command. The troops add +1 to their Toughness.",
  description_short: `Allies within Command radius add +1 to their Toughness.`,
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
