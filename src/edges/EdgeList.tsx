import { BackgroundEdges } from "./edge_details/background_edges/BackgroundEdges";
import { CombatEdges } from "./edge_details/combat_edges/CombatEdges";
import { PowerEdges } from "./edge_details/power_edges/PowerEdges";
import { ProfessionalEdges } from "./edge_details/professional_edges/ProfessionalEdges";

export const EdgeList = [
  ...BackgroundEdges,
  ...CombatEdges,
  ...PowerEdges,
  ...ProfessionalEdges,
];
