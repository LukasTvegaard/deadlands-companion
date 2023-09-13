import { Attribute, DieType } from "../../../utils/enums";
import { Character } from "../../../utils/types/Character";
import { DamageResult, DamageType } from "../../../utils/types/DamageType";
import { EffectVariant } from "../../../utils/types/Effect";
import {
  getEffectTotal,
  getRelevantEffectsForEffectable,
} from "./EffectsLogic";
import { getRoll } from "./RollLogic";

const dieTypeIsAttribute = (
  rollable: Attribute | DieType
): rollable is Attribute => {
  return rollable in Attribute;
};

const convertToDamageDice = (
  dieType: Attribute | DieType,
  character: Character
): DieType => {
  if (dieTypeIsAttribute(dieType)) {
    return getRoll(dieType as Attribute, character).dice;
  }

  return dieType;
};

export const getDamage = (
  damage: DamageType,
  character: Character
): DamageResult => {
  const damageDice = damage.dieTypes.map((dieType) =>
    convertToDamageDice(dieType, character)
  );

  const relevantEffects = getRelevantEffectsForEffectable("Damage", character);

  const effectModifier = getEffectTotal(
    relevantEffects,
    EffectVariant.ModifyFlat
  );

  const damageModifier = damage.damageModifier + effectModifier;

  return { dieTypes: damageDice, modifier: damageModifier };
};
