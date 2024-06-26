import { DieType } from "../../../utils/enums";
import { Character } from "../../../utils/types/Character";
import { Effect, EffectVariant } from "../../../utils/types/Effect";
import { Rollable } from "../../../utils/types/Rollable";
import { getBaseDie, stepDieType } from "./DieLogic";
import {
  getEffectTotal,
  getRelevantEffectsForEffectable,
} from "./EffectsLogic";
import { getBaseModifier } from "./ModifierLogic";

const getRollDieType = (
  rollTarget: Rollable,
  character: Character,
  effects: Effect[]
): DieType => {
  const baseDie = getBaseDie(rollTarget, character);

  const effectDie = getEffectTotal(effects, EffectVariant.ModifyDie);

  return stepDieType(baseDie, effectDie);
};

const getModifier = (
  rollDie: DieType,
  character: Character,
  effects: Effect[],
  ignorePenalties: boolean
) => {
  const baseModifier = getBaseModifier(rollDie, character, ignorePenalties);

  const effectModifier = getEffectTotal(effects, EffectVariant.ModifyFlat);

  return baseModifier + effectModifier;
};

type RollResult = {
  dice: DieType;
  modifier: number;
};
export const getRoll = (
  rollTarget: Rollable,
  character: Character,
  contextEffects: Effect[] = [],
  ignorePenalties: boolean = false
): RollResult => {
  const relevantEffects = getRelevantEffectsForEffectable(
    rollTarget,
    character
  );
  const effects = [...relevantEffects, ...contextEffects];
  const rollDie = getRollDieType(rollTarget, character, effects);

  const rollModifier = getModifier(
    rollDie,
    character,
    effects,
    ignorePenalties
  );

  return { dice: rollDie, modifier: rollModifier };
};
