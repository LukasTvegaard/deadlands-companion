import {
  DieType,
  Edge,
  EdgeCategory,
  Rank,
  Skill,
  Attribute,
} from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Fighting,
    dieType: DieType.D8,
  },
  { skill: Skill.Faith, dieType: DieType.D8 },
];

const EdgeRequirements: Edge[] = [
  Edge.ArcaneBackgroundMiracles,
  Edge.ArcaneBackgroundChiMastery,
];

export const Adept: EdgeDetailType = {
  key: Edge.Adept,
  name: "Adept",
  category: EdgeCategory.Professional,
  description:
    "Adepts are holy warriors who have trained themselves to be living weapons. Some do so to be ultimate warriors; others do it in the service of a cause or deity. As a free action, an adept can spend 1 Power Point to gain AP 2 with all of this unarmed attacks until his next action. In addition, upon taking this Edge and at each new Rank, they may choose to change the trappings of one of the following powers to work only on themselves but be activated as a free action: boost/lower trait, deflection, healing, smite, or speed. The Adept must have the power to begin with, and this does not allow him to activate more than one power in a round.",
  description_short:
    "Adepts are holy warriors who have trained themselves to be living weapons. See full description for details.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
