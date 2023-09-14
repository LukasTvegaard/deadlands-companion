import { Edges } from "../../static/edges/EdgeList";
import { Character } from "../../utils/types/Character";

export const getCharacterFullName = (
  character: Character | undefined
): string => {
  if (character) {
    if (character.firstName && character.lastName) {
      return `${character.firstName} ${character.lastName}`;
    }
    if (character.firstName) {
      return character.firstName;
    }
    if (character.lastName) {
      return character.lastName;
    }
  }

  return "";
};

export const getCharacterClass = (character: Character | undefined): string => {
  if (character?.edges) {
    for (const edge of Object.keys(character.edges)) {
      switch (edge) {
        case Edges.ArcaneBackgroundWeirdScience.key:
          return "Weird Scientist";
        case Edges.ArcaneBackgroundMagic.key:
          return "Huckster";
        case Edges.ArcaneBackgroundChiMastery.key:
          return "Martial Artist";
        case Edges.ArcaneBackgroundShamanism.key:
          return "Shaman";
        case Edges.ArcaneBackgroundMiracles.key:
          return "Blessed";
      }
    }
  }

  return "Gunslinger";
};
