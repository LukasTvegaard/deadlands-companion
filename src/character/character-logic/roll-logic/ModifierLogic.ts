import { characterHasHindrance } from "../../../static/hindrances/HindranceUtil";
import { DieType } from "../../../utils/enums";
import { Hindrance } from "../../../utils/enums/Hindrance";
import { Character } from "../../../utils/types/Character";
import { getBaseModifierFromDieType } from "./DieLogic";

export function getBaseModifier(
  rollDie: DieType,
  character: Character
): number {
  const wounds = character.wounds;
  const fatigue = character.fatigue;
  const hasThinSkinned = characterHasHindrance(
    Hindrance.ThinSkinned,
    character
  );
  const thinSkinnedModifier = hasThinSkinned && wounds > 0 ? -1 : 0;
  const dieTypeModifier = getBaseModifierFromDieType(rollDie) ?? 0;
  return dieTypeModifier - wounds - fatigue - thinSkinnedModifier;
}
