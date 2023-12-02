import { ref, set } from "firebase/database";
import { database } from "../../utils/firebase/Firebase";
import { Power } from "../../utils/enums/Power";

export const updateWeirdSciencePowerPoints = (
  characterKey: string,
  powerKey: Power,
  newPowerPoints: number
) => {
  const db = database();
  set(ref(db, `characters/${characterKey}/powers/${powerKey}`), newPowerPoints);
};

export const updateCharacterPowerPoints = (
  characterKey: string,
  newPowerPoints: number
) => {
  const db = database();
  set(ref(db, `characters/${characterKey}/currentPowerPoints`), newPowerPoints);
};
