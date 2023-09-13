import { Character } from "../../utils/types/Character";
import { notNullishAndPredicate } from "../../utils/NotNullPredicate";
import { Weapon } from "../../utils/enums/Weapon";
import { WeaponDetailType } from "../../utils/types/WeaponDetailType";
import { Weapons } from "./WeaponList";

export const StandardMelee = {
  rangeShort: 0,
  rangeMedium: 0,
  rangeLong: 0,
};

export const StandardRangeShort = {
  rangeShort: 4,
  rangeMedium: 8,
  rangeLong: 16,
};

export const StandardRange = {
  rangeShort: 12,
  rangeMedium: 24,
  rangeLong: 48,
};

export const StandardRangeLong = {
  rangeShort: 24,
  rangeMedium: 48,
  rangeLong: 96,
};

export const getWeaponDetailByKey = (
  key: Weapon | undefined
): WeaponDetailType | undefined => {
  if (key) {
    return Weapons[key];
  }
};

export const characterHasWeapon = (
  weapon: Weapon,
  character: Character
): boolean => {
  if (!character.weapons) {
    return false;
  }

  return weapon in character.weapons;
};

export const getCharacterWeaponDetails = (
  character: Character
): WeaponDetailType[] => {
  if (!character.weapons) {
    return [];
  }
  return Object.entries(character.weapons)
    .flatMap(([weaponKey, currentAmmo]) => {
      const weaponDetail = getWeaponDetailByKey(weaponKey as Weapon);
      if (weaponDetail) {
        return { ...weaponDetail, currentAmmo };
      }
      return null;
    })
    .filter(notNullishAndPredicate());
};
