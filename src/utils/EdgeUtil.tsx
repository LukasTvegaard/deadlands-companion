import { Edge } from "./enums";
import { Character } from "./types/Character";

export const characterHasEdge = (edge: Edge, character: Character): boolean => {
  if (!character.edges) {
    return false;
  }

  return edge in character.edges;
};
