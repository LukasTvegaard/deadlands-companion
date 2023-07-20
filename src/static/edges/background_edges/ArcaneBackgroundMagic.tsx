import { Edge, EdgeCategory, Rank } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [];

const EdgeRequirements: Edge[] = [];

export const ArcaneBackgroundMagic: EdgeDetailType = {
  key: Edge.ArcaneBackgroundMagic,
  name: "Arcane Background (Magic)",
  category: EdgeCategory.Background,
  description:
    "Magic in the Weird West is not to be taken lightly. Those who practice sorcery must often wrestle their powers from the dark spritis of the Weird West, who are rarely willing to give up easily. Hucksters envision these duels of will as card games, and the best are capable of amazing powers. It is rumored that others tread even darker paths, and harness the power of blood magic. If you choose to take this Edge, be sure read the appropriate details in the Deadlands Player's Handbook.",
  description_short: "Arcane Background for Hucksters",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
