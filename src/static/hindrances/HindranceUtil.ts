import { notNullishAndPredicate } from "../../utils/NotNullPredicate";
import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";
import { Character } from "../../utils/types/Character";
import { Hindrances } from "./HindranceList";

export const getHindranceDetailByKey = (
  key: Hindrance | undefined
): HindranceDetailType | undefined => {
  if (key) {
    const edge = Hindrances[key];
    return edge;
  }
};

export const characterHasHindrance = (
  hindrance: Hindrance,
  character: Character
): boolean => {
  if (!character.hindrances) {
    return false;
  }

  return hindrance in character.hindrances;
};

export const getCharacterHindranceDetails = (
  character: Character
): HindranceDetailType[] => {
  if (!character.hindrances) {
    return [];
  }
  return Object.keys(character.hindrances)
    .flatMap((hindranceKey) =>
      getHindranceDetailByKey(hindranceKey as Hindrance)
    )
    .filter(notNullishAndPredicate());
};
