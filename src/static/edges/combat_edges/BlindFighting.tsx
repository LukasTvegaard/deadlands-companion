import { DieType, Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Fighting,
    dieType: DieType.d8,
  },
  {
    skill: Skill.Notice,
    dieType: DieType.d10,
  },
];

const EdgeRequirements: Edge[] = [Edge.ArcaneBackgroundChiMastery];

export const BlindFighting: EdgeDetailType = {
  key: Edge.BlindFighting,
  name: "Blind Fighting",
  category: EdgeCategory.Combat,
  description:
    "Whether your cowpoke's blind as a bat, or just well-versed in night-fighting, he's got the advantage in darkness. The character receives no penalties for darkness when attacking foes within 3 tiles, and can sense their movement well enough to move toward them as if he could see them. Characters with the Blind Hindrance suffer no penalties when making Fighting rolls against opponents within 3 tiles",
  description_short:
    "Character suffers no penalty from darkness or blindness when attacking within 3 tiles",
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
};
