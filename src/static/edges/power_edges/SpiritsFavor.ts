import { DieType, Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  { skill: Skill.TribalMedicine, dieType: DieType.D8 },
];

const EdgeRequirements: Edge[] = [Edge.ArcaneBackgroundShamanism];

export const SpiritsFavor: EdgeDetailType = {
  key: Edge.SpiritsFavor,
  name: "Spirit's Favor",
  category: EdgeCategory.Powers,
  description: `Normally a shaman who follows the Old
    Ways is proscribed from using technology
    under any circumstances. The shaman with
    this Edge may petition the spirits to allow
    him to use one normal technological device
    (no Mad Science gizmos or Infernal Devices)
    without offending them, in return for a sur-
    render of personal power. Petitioning the
    spirits involves a ritual offering, which takes
    1d10+10 minutes. This Edge may only be
    applied to one device at a time.
    For as long as the shaman makes use of
    the device, he has 5 less Power Points than
    usual. When he stops using the device these
    points return at the usual rate. The shaman
    may abandon one item and switch to another,
    which requires another 1d10+10 minutes.
    During this time the favor does not apply to
    either device.`,
  description_short:
    "Allows a Shaman following the old ways to petition the Spirits for permission to use a piece of technology.",
  rank_requirement: Rank.Seasoned,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
