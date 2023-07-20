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

const StatRequirements: StatRequirement[] = [
  { stat: Attribute.Agility, dieType: DieType.D8 },
];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Riding,
    dieType: DieType.D6,
  },
];

const EdgeRequirements: Edge[] = [];

export const BornInTheSaddle: EdgeDetailType = {
  key: Edge.BornInTheSaddle,
  name: "Born in the Saddle",
  category: EdgeCategory.Professional,
  description:
    "Some folks have spent so much time on horseback it's become second nature to them. In fact, there's no place else they'd rather be. Heroes who were Born in the Saddle add +2 to Riding rolls. This bonus also applies to long-distance travel; see Saddle Sore in the Deadlands Player's Guide. The caballero may also spend Bennies to make Soak rolls for any horse he happens to be riding, but only when he's in the saddle. This is a Riding roll at -2 (cancelling out the usual +2).",
  description_short:
    "+2 to all Riding rolls, allow making Soak rolls on behalf of mount",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
