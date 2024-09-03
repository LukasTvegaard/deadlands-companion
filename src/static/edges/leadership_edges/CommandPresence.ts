import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [Edge.Command];

export const CommandPresence: EdgeDetailType = {
  key: Edge.CommandPresence,
  name: "Command Presence",
  category: EdgeCategory.Leadership,
  description:
    "A booming voice, effective commands, natural charisma, or simple training results in a much more effective combat element. At the center of that element is the officer in command. A hero with this Edge has a “command radius” of 10” instead of the usual 5.",
  description_short: `Extend Command radius to 10".`,
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
