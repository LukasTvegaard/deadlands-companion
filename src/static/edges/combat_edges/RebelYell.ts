import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const RebelYell: EdgeDetailType = {
  key: Edge.RebelYell,
  name: "Rebel Yell",
  category: EdgeCategory.Combat,
  description:
    "This Edge is only available to characters from the CSA. The blood-curdling Rebel Yell has terrified Yankees and emboldened Confederates from Manassas on. Sure, the shooting has mostly stopped now, but feelings run pretty deep on both sides, and when the blood is up, this war cry can still elicit the same responses. Your hero may make an Intimidation Test of Faith against all targets in a Large Burst Template in front of them.",
  description_short:
    "May use Intimidation Test of Faith against all targets in a Large Burst Template in front of them.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
