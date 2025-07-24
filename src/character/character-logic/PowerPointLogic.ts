import { Edge } from "../../utils/enums";
import { Power } from "../../utils/enums/Power";
import { Character } from "../../utils/types/Character";
import { ArcaneBackground, getArcaneBackground } from "./ArcaneBackgroundLogic";

const someKeyInObject = (keys: string[], object: Record<string, unknown>) => {
  return keys.some((key) => key in object);
};

export const shouldShowPowerPoints = (character: Character): boolean => {
  if (!character.edges) return false;
  return someKeyInObject(
    [
      Edge.ArcaneBackgroundMagic,
      Edge.ArcaneBackgroundHexslinger,
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

export const getTotalPowerPoints = (character: Character): number => {
  if (!character.edges) return 0;
  return (
    getBasePowerPoints(getArcaneBackground(character)) +
    getExtraPowerPoints(character.edges)
  );
};

export const getLockedPowerPoints = (
  character: Character,
  power: Power
): number => {
  const usedPotionPowerPoints = getUsedPotionPowerPoints(character, power);
  // Extend with additional sources of locked power points if needed
  return usedPotionPowerPoints;
};

export const getTotalPotionPowerPoints = (character: Character): number => {
  return Math.floor(getTotalPowerPoints(character) / 2);
};

export const getUsedPotionPowerPoints = (
  character: Character,
  power?: Power
): number => {
  // Implement logic to calculate used potion power points based on the character's state and the specific power
  if (!character.potions || !power) return 0;

  const potionsCreatedByCharacterWithPower = Object.values(
    character.potions
  ).filter(
    (potion) => potion.power === power && potion.createdBy === character.id
  );

  return potionsCreatedByCharacterWithPower.reduce(
    (total, potion) => total + potion.powerPointCost,
    0
  );
};
