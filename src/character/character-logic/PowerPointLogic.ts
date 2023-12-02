import { Edge } from "../../utils/enums";
import { Character } from "../../utils/types/Character";
import { ArcaneBackground, getArcaneBackground } from "./ArcaneBackgroundLogic";

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

const getBasePowerPoints = (
  arcaneBackground: ArcaneBackground | null
): number => {
  switch (arcaneBackground) {
    case Edge.ArcaneBackgroundChiMastery:
    case Edge.ArcaneBackgroundMiracles:
    case Edge.ArcaneBackgroundShamanism:
      return 15;
    case Edge.ArcaneBackgroundMagic:
    case Edge.ArcaneBackgroundHexslinger:
    case Edge.ArcaneBackgroundWeirdScience:
      return 10;
    default:
      return 0;
  }
};

const getExtraPowerPoints = (edges: Record<Edge, true>): number => {
  return (
    Object.keys(edges).filter((edge) => edge.includes("PowerPoints")).length * 5
  );
};

export const getMaxPowerPoints = (character: Character): number => {
  if (!character.edges) return 0;
  return (
    getBasePowerPoints(getArcaneBackground(character)) +
    getExtraPowerPoints(character.edges)
  );
};
