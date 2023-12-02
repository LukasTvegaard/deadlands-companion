import { Character } from "../../utils/types/Character";
import { notNullishAndPredicate } from "../../utils/NotNullPredicate";
import { Weapon } from "../../utils/enums/Weapon";
import { WeaponDetailType } from "../../utils/types/WeaponDetailType";
import { Weapons } from "./WeaponList";

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
    .flatMap(([weaponKey, weaponValue]) => {
      const weaponDetail = getWeaponDetailByKey(weaponKey as Weapon);
      if (weaponDetail) {
        return {
          ...weaponDetail,
          currentAmmo: weaponValue.ammo,
          isTrademarkWeapon: weaponValue.isTrademarkWeapon,
        };
      }
      return null;
    })
    .filter(notNullishAndPredicate());
};
