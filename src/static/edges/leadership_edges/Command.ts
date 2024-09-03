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
  { stat: Attribute.Smarts, dieType: DieType.D6 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Command: EdgeDetailType = {
  key: Edge.Command,
  name: "Command",
  category: EdgeCategory.Leadership,
  description:
    "Command is the ability to give clear instructions to surrounding allies (within 5\") and enforce your hero's will upon them. This makes your compatriots more willing to fight on despite their wounds, and so adds +1 to their Spirit rolls to recover from being Shaken.",
  description_short: `Allies within Command radius add +1 to Spirit rolls to recover from Shaken. Command radius is 5".`,
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
