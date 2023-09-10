import { DieType, Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  { skill: Skill.WeirdScience, dieType: DieType.D12 },
];

const EdgeRequirements: Edge[] = [Edge.ArcaneBackgroundWeirdScience];

export const Eureka: EdgeDetailType = {
  key: Edge.Eureka,
  name: "Eureka!",
  category: EdgeCategory.Powers,
  description:
    "After tinkering and working, you may create a true Infernal Device out of one of your powers. When this Edge is taken, pick one power you currently have. The gizmo no longer uses Power Points, and thereafter functions solely on ghost rock. One pound of ghost rock allows a maintainable power to be used for two hours of total use and allows an Instant power to be used 20 times. Your prototype is more stable than most other Infernal Devices; it only suffers a Malfunction on a critical failure. On top of that, your blueprints and patent earn you prestige and money from a corporation capable of reproducing your device on a mass market scale. Thereafter, you have +2 Charisma and no negative effects from your Dementias when dealing with other Weird Scientists, and receive 1d6 x $50 in royalties every month.",
  description_short:
    "Create a true infernal device from one of your powers; receive royalties every month and recognition among other scientists.",
  rank_requirement: Rank.Legendary,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
