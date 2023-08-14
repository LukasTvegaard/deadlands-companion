import { getCharacterEdgeDetails } from "../../../static/edges/EdgeUtil";
import { Character } from "../../../utils/types/Character";
import {
  Effect,
  EffectVariant,
  Effectable,
  Effecting,
} from "../../../utils/types/Effect";

function getRelevantEffectsFromEffecting<T extends Effecting>(
  effecting: T[],
  rollTarget: Effectable
): Effect[] {
  return effecting
    .flatMap((effector) => effector.effects)
    .filter((effect) => effect.target === rollTarget);
}

export const getRelevantEffectsForEffectable = (
  rollTarget: Effectable,
  character: Character
): Effect[] => {
  const edgeEffects = getRelevantEffectsFromEffecting(
    getCharacterEdgeDetails(character),
    rollTarget
  );
  // FIXME: Add additional sources of permanent effects (hindrances, items, etc.)
  const temporaryEffects = character.effects ?? [];
  return [...edgeEffects, ...temporaryEffects];
};

export const getEffectTotal = (
  effects: Effect[],
  effectVariant: EffectVariant
) => {
  return effects
    .filter((effect) => effect.effectVariant === effectVariant)
    .reduce((acc, effect) => acc + effect.value, 0);
};
