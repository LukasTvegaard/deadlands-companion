import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const DangerSense: EdgeDetailType = {
  key: Edge.DangerSense,
  name: "Danger Sense",
  category: EdgeCategory.Weird,
  description:
    "Your hero can sense when something bad is about to happen. Anytime they are about to be the victim of a surpise attack, ambush, or other nasty surprise, they get a Notice roll at -2 just before the attack or event occurs. If successful, they know something is about to happen and will not start the first round of a combat surprised.",
  description_short:
    "Notice roll at -2 to detect surprise attacks. If successful, don't start combat Surprised.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
