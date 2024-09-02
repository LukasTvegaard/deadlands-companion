import { notNullishAndPredicate } from "../../utils/NotNullPredicate";
import { Power } from "../../utils/enums/Power";
import { Character } from "../../utils/types/Character";
import { PowerDetailType } from "../../utils/types/PowerDetailType";
import { Powers } from "./PowerList";

export const getPowerDetailByKey = (
  key: Power | undefined
): PowerDetailType | undefined => {
  if (key) {
    return Powers[key];
  }
};

export const characterHasPower = (
  power: Power,
  character: Character
): boolean => {
  if (!character.powers) {
    return false;
  }

  return power in character.powers;
};

export const getCharacterPowerDetails = (
  character: Character
): PowerDetailType[] => {
  if (!character.powers) {
    return [];
  }
  return Object.entries(character.powers)
    .flatMap(([powerKey, currentPowerPoints]) => {
      const powerDetail = getPowerDetailByKey(powerKey as Power);
      if (powerDetail) {
        return { ...powerDetail, currentPowerPoints };
      }
      return null;
    })
    .filter(notNullishAndPredicate());
};
