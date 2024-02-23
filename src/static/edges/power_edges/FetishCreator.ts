import {
  Attribute,
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Skill,
} from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [
  { stat: Attribute.Smarts, dieType: DieType.D8 },
  { stat: Attribute.Spirit, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [
  { skill: Skill.TribalMedicine, dieType: DieType.D8 },
];

const EdgeRequirements: Edge[] = [Edge.ArcaneBackgroundShamanism];

export const FetishCreator: EdgeDetailType = {
  key: Edge.FetishCreator,
  name: "Fetish Creator",
  category: EdgeCategory.Powers,
  description: `This is a shamanistic version of the Gadgeteer Edge.
    Once per game session, the shaman can create a
    magic talisman and imbue it with arcane energy.
    The device uses any power available to the shaman
    (though this is still subject to Rank restrictions). It
    has half the creator's Power points and once these
    are used up they do not recharge. The ritual to imbue
    the object takes 1d20 minutes. Activating the device
    requires a Spirit roll.`,
  description_short:
    "Once per game session, allows constructing improvised fetish that can cast any power available to Shamans.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
