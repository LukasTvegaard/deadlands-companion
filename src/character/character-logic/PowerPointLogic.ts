import { Edge } from "../../utils/enums";
import { Character } from "../../utils/types/Character";

const someKeyInObject = (keys: string[], object: Record<string, any>) => {
  return keys.some((key) => key in object);
};

export const shouldShowPowerPoints = (character: Character): boolean => {
  if (!character.edges) return false;
  return someKeyInObject(
    [
      Edge.ArcaneBackgroundMagic,
      Edge.ArcaneBackgroundChiMastery,
      Edge.ArcaneBackgroundMiracles,
      Edge.ArcaneBackgroundShamanism,
    ],
    character.edges
  );
};

const getBasePowerPoints = (edges: Record<Edge, true>): number => {
  if (
    someKeyInObject(
      [
        Edge.ArcaneBackgroundChiMastery,
        Edge.ArcaneBackgroundMiracles,
        Edge.ArcaneBackgroundShamanism,
      ],
      edges
    )
  ) {
    return 15;
  }

  if (
    someKeyInObject(
      [Edge.ArcaneBackgroundMagic, Edge.ArcaneBackgroundWeirdScience],
      edges
    )
  ) {
    return 10;
  }

  return 0;
};

const getExtraPowerPoints = (edges: Record<Edge, true>): number => {
  return (
    Object.keys(edges).filter((edge) => edge.includes(Edge.PowerPoints))
      .length * 5
  );
};

export const getMaxPowerPoints = (character: Character): number => {
  if (!character.edges) return 0;
  return (
    getBasePowerPoints(character.edges) + getExtraPowerPoints(character.edges)
  );
};
