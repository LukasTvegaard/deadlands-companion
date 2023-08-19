import { DieType, Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Fighting,
    dieType: DieType.D10,
  },
];

const EdgeRequirements: Edge[] = [];

export const TrademarkWeaponFighting: EdgeDetailType = {
  key: Edge.TrademarkWeaponFighting,
  name: "Trademark Weapon (Fighting)",
  category: EdgeCategory.Combat,
  description:
    "Your hero knows one unique weapon like the back of their hand. When using that weapon, they add +1 to their Fighting rolls. If a Trademark Weapon is lost, the hero can replace it, but the benefit of the Edge doesn't kick in for two game weeks.",
  description_short: "+1 Fighting when using designated trademark weapon.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [], // MISSING: Trademark weapon toggle on weapons.
};
