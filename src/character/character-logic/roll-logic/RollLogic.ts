import { DieType } from "../../../utils/enums";
import { Character } from "../../../utils/types/Character";
import { Effect, EffectVariant } from "../../../utils/types/Effect";
import { Rollable } from "../../../utils/types/Rollable";
import { getBaseDie, stepDieType } from "./DieLogic";
import { getRelevantEffectsForRollTarget } from "./EffectsLogic";
import { getBaseModifier } from "./ModifierLogic";

const getRollDieType = (
  rollTarget: Rollable,
  character: Character,
  effects: Effect[]
): DieType => {
  const baseDie = getBaseDie(rollTarget, character);

  const dieTypeStepTotal = effects
    .filter((effect) => effect.effectVariant === EffectVariant.ModifyDie)
    .reduce((acc, effect) => acc + effect.value, 0);

  return stepDieType(baseDie, dieTypeStepTotal);
};

const getModifier = (
  rollDie: DieType,
  character: Character,
  effects: Effect[]
) => {
  const baseModifier = getBaseModifier(rollDie, character);

  const effectModifier = effects
    .filter((effect) => effect.effectVariant === EffectVariant.ModifyFlat)
    .reduce((acc, effect) => acc + effect.value, 0);

  return baseModifier + effectModifier;
};

type RollResult = {
  dice: DieType;
  modifier: number;
};
export const getRoll = (
  rollTarget: Rollable,
  character: Character
): RollResult => {
  const effects = getRelevantEffectsForRollTarget(rollTarget, character);
  const rollDie = getRollDieType(rollTarget, character, effects);

  const rollModifier = getModifier(rollDie, character, effects);

  return { dice: rollDie, modifier: rollModifier };
};
