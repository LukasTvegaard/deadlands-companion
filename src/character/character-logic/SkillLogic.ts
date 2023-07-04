import { characterHasEdge } from "../../utils/EdgeUtil";
import { Edge, Skill } from "../../utils/enums";
import { Character } from "../../utils/types/Character";

export const availableSkillFilter = (
  skill: Skill,
  character: Character
): boolean => {
  if (character.skills && skill in character.skills) {
    return false;
  }
  if (skill === Skill.Faith) {
    return characterHasEdge(Edge.ArcaneBackgroundMiracles, character);
  }
  if (skill === Skill.Spellcasting) {
    return characterHasEdge(Edge.ArcaneBackgroundMagic, character); // FIXME: Remember to add Hexslinger
  }
  if (skill === Skill.WeirdScience) {
    return characterHasEdge(Edge.ArcaneBackgroundWeirdScience, character);
  }
  if (skill === Skill.TribalMedicine) {
    return characterHasEdge(Edge.ArcaneBackgroundShamanism, character);
  }
  return true;
};
