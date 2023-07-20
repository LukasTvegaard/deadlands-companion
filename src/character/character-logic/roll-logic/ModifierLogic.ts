import { DieType } from "../../../utils/enums";
import { Character } from "../../../utils/types/Character";
import { getBaseModifierFromDieType } from "./DieLogic";

export function getBaseModifier(
  rollDie: DieType,
  character: Character
): number {
  const wounds = character.wounds;
  const fatigue = character.fatigue;
  const dieTypeModifier = getBaseModifierFromDieType(rollDie) ?? 0;
  return dieTypeModifier - wounds - fatigue;
}
