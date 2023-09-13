import { ref, set } from "firebase/database";
import { Weapon } from "../../utils/enums/Weapon";
import { database } from "../../utils/firebase/Firebase";

export const updateAmmo = (
  characterKey: string,
  weaponKey: Weapon,
  newAmmo: number
) => {
  const db = database();
  set(ref(db, `characters/${characterKey}/weapons/${weaponKey}`), newAmmo);
};
