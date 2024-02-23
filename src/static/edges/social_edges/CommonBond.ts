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
  { stat: Attribute.Spirit, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const CommonBond: EdgeDetailType = {
  key: Edge.CommonBond,
  name: "Common Bond",
  category: EdgeCategory.Social,
  description: `This Edge signifies a special link between close companions - such as a typical party. 
    It doesn't matter whether or not the characters get along
    perfectly or not, they've just formed a close and
    common bond during their epic adventures.
    A character with this Edge may freely give
    his Bennies to any other Wild Card he can
    communicate with. This represents the character
    giving his verbal or spiritual support to the ally.
    The player should say what his character is
    doing to give the support. The gesture could be
    as complex as a rousing speech, or as simple as
    a knowing nod.`,
  description_short: "May freely give Fate Chips to other players.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
