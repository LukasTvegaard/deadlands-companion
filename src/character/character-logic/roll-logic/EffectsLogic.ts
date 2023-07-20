import { getCharacterEdgeDetails } from "../../../static/edges/EdgeUtil";
import { Character } from "../../../utils/types/Character";
import { Effect, Effectable } from "../../../utils/types/Effect";
import { Rollable } from "../../../utils/types/Rollable";

function getRelevantEffectsFromEffectable<T extends Effectable>(
  effectable: T[],
  rollTarget: Rollable
): Effect[] {
  return effectable.reduce((acc, curr) => {
    const effects = curr.effects;
    effects.forEach((effect) => {
      if (effect.target === rollTarget || effect.target === "All") {
        acc.push(effect);
      }
    });
    return acc;
  }, [] as Effect[]);
}

export const getRelevantEffectsForRollTarget = (
  rollTarget: Rollable,
  character: Character
): Effect[] => {
  const edgeEffects = getRelevantEffectsFromEffectable(
    getCharacterEdgeDetails(character),
    rollTarget
  );
  const temporaryEffects = character.effects ?? [];
  return [...edgeEffects, ...temporaryEffects];
};
