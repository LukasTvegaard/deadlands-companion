import { Edges } from "./EdgeList";
import { Edge } from "../../utils/enums";
import { EdgeDetailType } from "../../utils/interfaces";
import { Character } from "../../utils/types/Character";
import { notNullishAndPredicate } from "../../utils/NotNullPredicate";

export const getEdgeDetailByKey = (
  key: Edge | undefined
): EdgeDetailType | undefined => {
  if (key) {
    const edge = Edges[key];
    return edge;
  }
};

export const characterHasEdge = (edge: Edge, character: Character): boolean => {
  if (!character.edges) {
    return false;
  }

  return edge in character.edges;
};

export const getCharacterEdgeDetails = (
  character: Character
): EdgeDetailType[] => {
  if (!character.edges) {
    return [];
  }
  return Object.keys(character.edges)
    .flatMap((edgeKey) => getEdgeDetailByKey(edgeKey as Edge))
    .filter(notNullishAndPredicate());
};
