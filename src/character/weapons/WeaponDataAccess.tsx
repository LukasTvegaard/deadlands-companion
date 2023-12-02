import { ref, set } from "firebase/database";
import { Weapon } from "../../utils/enums/Weapon";
import { database } from "../../utils/firebase/Firebase";

export const updateAmmo = (
  characterKey: string,
  weaponKey: Weapon,
  newAmmo: number
) => {
  const db = database();
  set(ref(db, `characters/${characterKey}/weapons/${weaponKey}/ammo`), newAmmo);
};

export const setTrademarkWeapon = (
  characterKey: string,
  weaponKey: Weapon,
  isTrademarkWeapon: boolean
) => {
  const db = database();
  set(
    ref(
      db,
      `characters/${characterKey}/weapons/${weaponKey}/isTrademarkWeapon`
    ),
    isTrademarkWeapon
  );
};
