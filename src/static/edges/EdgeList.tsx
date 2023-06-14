import { BackgroundEdges } from "./background_edges/BackgroundEdges";
import { CombatEdges } from "./combat_edges/CombatEdges";
import { PowerEdges } from "./power_edges/PowerEdges";
import { ProfessionalEdges } from "./professional_edges/ProfessionalEdges";

export const EdgeList = [
  ...BackgroundEdges,
  ...CombatEdges,
  ...PowerEdges,
  ...ProfessionalEdges,
];
