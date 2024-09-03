import { ref, set, update } from "firebase/database";
import { database } from "../utils/firebase/Firebase";
import { TemporaryEffect } from "../utils/types/TemporaryEffect";

const getBaseRoute = (characterKey: string) =>
  `characters/${characterKey}/temporaryEffects`;

export const addTemporaryEffect = (
  characterKey: string,
  temporaryEffect: TemporaryEffect
) => {
  const db = database();
  if (temporaryEffect.name == "" || temporaryEffect.duration === 0) return;
  return set(
    ref(db, `${getBaseRoute(characterKey)}/${temporaryEffect.name}`),
    temporaryEffect
  );
};

export const tickBuffDurationDown = (
  characterKey: string,
  temporaryEffect: TemporaryEffect,
  tickDown: boolean
) => {
  const db = database();

  const targetDuration = tickDown
    ? temporaryEffect.duration - 1
    : temporaryEffect.duration + 1;

  const buffDuration = Math.max(targetDuration, 0);
  if (buffDuration === 0)
    return set(
      ref(db, `${getBaseRoute(characterKey)}/${temporaryEffect.name}`),
      null
    );
  return update(
    ref(db, `${getBaseRoute(characterKey)}/${temporaryEffect.name}`),
    {
      duration: buffDuration,
    }
  );
};
