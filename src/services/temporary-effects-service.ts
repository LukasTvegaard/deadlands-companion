import { ref, set, update } from "firebase/database";
import { database } from "../utils/firebase/Firebase";
import { TemporaryEffect } from "../utils/types/TemporaryEffect";

const getBaseRoute = (characterKey: string) =>
  `characters/${characterKey}/temporary-effects`;

export type ChangeTemporaryEffectInput = {
  characterKey: string;
  temporaryEffect: TemporaryEffect;
};

export const addTemporaryEffect = ({
  characterKey,
  temporaryEffect,
}: ChangeTemporaryEffectInput) => {
  const db = database();
  return set(
    ref(db, `${getBaseRoute(characterKey)}/${temporaryEffect.name}`),
    temporaryEffect
  );
};

export const tickBuffDurationDown = ({
  characterKey,
  temporaryEffect,
}: ChangeTemporaryEffectInput) => {
  const db = database();

  const buffDuration = Math.max(temporaryEffect.duration - 1, 0);
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
