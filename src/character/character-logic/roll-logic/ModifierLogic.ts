import { characterHasEdge } from "../../../static/edges/EdgeUtil";
import { characterHasHindrance } from "../../../static/hindrances/HindranceUtil";
import { DieType, Edge } from "../../../utils/enums";
import { Hindrance } from "../../../utils/enums/Hindrance";
import { Character } from "../../../utils/types/Character";
import { getBaseModifierFromDieType } from "./DieLogic";

function getWoundModifier(character: Character): number {
  const wounds = character.wounds;
  const hasNervesOfSteel = characterHasEdge(Edge.NervesOfSteel, character);
  const hasImprovedNervesOfSteel = characterHasEdge(
    Edge.NervesOfSteelImproved,
    character
  );
  const hasThinSkinned = characterHasHindrance(
    Hindrance.ThinSkinned,
    character
  );
  const nervesOfSteelModifier = hasNervesOfSteel && wounds > 0 ? -1 : 0;
  const improvedNervesOfSteelModifier =
    hasImprovedNervesOfSteel && wounds > 1 ? -1 : 0;
  const thinSkinnedModifier = hasThinSkinned && wounds > 0 ? 1 : 0;

  return (
    wounds -
    nervesOfSteelModifier -
    improvedNervesOfSteelModifier -
    thinSkinnedModifier
  );
}

export function getBaseModifier(
  rollDie: DieType,
  character: Character,
  ignorePenalties: boolean
): number {
  const dieTypeModifier = getBaseModifierFromDieType(rollDie) ?? 0;
  if (ignorePenalties) return dieTypeModifier;

  const woundModifier = getWoundModifier(character);
  const fatigue = character.fatigue;
  return dieTypeModifier - woundModifier - fatigue;
}
