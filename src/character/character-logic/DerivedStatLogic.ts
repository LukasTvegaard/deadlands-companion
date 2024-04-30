import {
  Attribute,
  DieType,
  Skill,
  dieTypeToValue,
  rankToValue,
} from "../../utils/enums";
import { DerivedStat } from "../../utils/enums/DerivedStat";
import { Character } from "../../utils/types/Character";
import { EffectVariant } from "../../utils/types/Effect";
import { stepDieType } from "./roll-logic/DieLogic";
import {
  getEffectTotal,
  getRelevantEffectsForEffectable,
} from "./roll-logic/EffectsLogic";
import { getRoll } from "./roll-logic/RollLogic";

const getDerivedStatWithEffects = (
  derivedStat: DerivedStat,
  baseDerivedStatValue: number,
  character: Character
): number => {
  const effects = getRelevantEffectsForEffectable(derivedStat, character);
  const derivedStatModifier = getEffectTotal(effects, EffectVariant.ModifyFlat);

  return baseDerivedStatValue + derivedStatModifier;
};

export const getToughness = (character: Character) => {
  const vigorRoll = getRoll(Attribute.Vigor, character, [], true);
  const vigorValue = dieTypeToValue(vigorRoll.dice) + vigorRoll.modifier;
  const baseToughness = Math.floor(vigorValue / 2) + 2;

  return getDerivedStatWithEffects(
    DerivedStat.Toughness,
    baseToughness,
    character
  );
};

export const getParry = (character: Character): number => {
  const fightingRoll = getRoll(Skill.Fighting, character, [], true);
  const fightingValue =
    dieTypeToValue(fightingRoll.dice) + fightingRoll.modifier;
  const baseParry = Math.floor(fightingValue / 2) + 2;

  return getDerivedStatWithEffects(DerivedStat.Parry, baseParry, character);
};

export const getCharisma = (character: Character): number => {
  return getDerivedStatWithEffects(DerivedStat.Charisma, 0, character);
};

export const getGrit = (character: Character): number => {
  const baseGrit = rankToValue(character.rank);
  return getDerivedStatWithEffects(DerivedStat.Grit, baseGrit, character);
};

export const getPace = (character: Character): number => {
  const basePace = 6;
  return getDerivedStatWithEffects(DerivedStat.Pace, basePace, character);
};

export const getRunningDie = (character: Character): DieType => {
  const baseRunningDie = DieType.D6;
  const effects = getRelevantEffectsForEffectable(
    DerivedStat.RunningDie,
    character
  );
  const effectDieStep = getEffectTotal(effects, EffectVariant.ModifyDie);
  return stepDieType(baseRunningDie, effectDieStep);
};
