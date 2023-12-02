import { characterHasEdge } from "../../static/edges/EdgeUtil";
import { Edge, Skill } from "../../utils/enums";
import { Character } from "../../utils/types/Character";

export type ArcaneBackground =
  | Edge.ArcaneBackgroundChiMastery
  | Edge.ArcaneBackgroundHexslinger
  | Edge.ArcaneBackgroundMagic
  | Edge.ArcaneBackgroundMiracles
  | Edge.ArcaneBackgroundShamanism
  | Edge.ArcaneBackgroundWeirdScience;

export const getArcaneBackground = (
  character: Character
): ArcaneBackground | null => {
  if (characterHasEdge(Edge.ArcaneBackgroundChiMastery, character)) {
    return Edge.ArcaneBackgroundChiMastery;
  }
  if (characterHasEdge(Edge.ArcaneBackgroundHexslinger, character)) {
    return Edge.ArcaneBackgroundHexslinger;
  }
  if (characterHasEdge(Edge.ArcaneBackgroundMagic, character)) {
    return Edge.ArcaneBackgroundMagic;
  }
  if (characterHasEdge(Edge.ArcaneBackgroundMiracles, character)) {
    return Edge.ArcaneBackgroundMiracles;
  }
  if (characterHasEdge(Edge.ArcaneBackgroundShamanism, character)) {
    return Edge.ArcaneBackgroundShamanism;
  }
  if (characterHasEdge(Edge.ArcaneBackgroundWeirdScience, character)) {
    return Edge.ArcaneBackgroundWeirdScience;
  }
  return null;
};

export const getSpellcastingSkill = (character: Character) => {
  const arcaneBackground = getArcaneBackground(character);

  switch (arcaneBackground) {
    case Edge.ArcaneBackgroundMiracles:
      return Skill.Faith;
    case Edge.ArcaneBackgroundShamanism:
      return Skill.TribalMedicine;
    case Edge.ArcaneBackgroundMagic:
    case Edge.ArcaneBackgroundHexslinger:
      return Skill.Spellcasting;
    case Edge.ArcaneBackgroundWeirdScience:
      return Skill.WeirdScience;
    case Edge.ArcaneBackgroundChiMastery: // FIXME: Not implemented
    default:
      return Skill.Boating;
  }
};
