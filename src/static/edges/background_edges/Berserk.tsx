import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const Berserk: EdgeDetailType = {
  key: Edge.Berserk,
  name: "Berserk",
  category: EdgeCategory.Background,
  description:
    "Immediately after suffering a wound or a Shaken result from physical damage, your hero must make a Smarts roll or go Berserk. While Berserk, her Parry is reduced by 2 but she adds +2 to Toughness and to all Fighting, Strength, and melee damage rolls. The warrior ignores all wound modifiers while Berserk, but cannot use any skills, Edges, or maneuvers that require concentration, including Shooting and Taunt. Berserkers attack with reckless abandon. Anytime her Fighting die is a 1 (regardless of wild die) she hits a random adjacent target. The attack may hit friend as well as foe. The Berserker may end her rage by doing nothing (not even moving) for one full action and then making a Smarts roll at -2.",
  description_short:
    "-2 parry, +2 Fighting, Strength, melee damage, and Toughness after being hit. No concentration actions.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
