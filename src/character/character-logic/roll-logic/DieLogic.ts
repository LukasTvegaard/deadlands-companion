import {
  Attribute,
  DieType,
  Edge,
  SkillLinkedAttribute,
} from "../../../utils/enums";
import { Character } from "../../../utils/types/Character";
import { getEnumByString } from "../../../utils/enums/EnumUtil";
import {
  Rollable,
  rollableIsAttribute,
  rollableIsSkill,
} from "../../../utils/types/Rollable";
import { characterHasEdge } from "../../../static/edges/EdgeUtil";

export const getBaseModifierFromDieType = (
  dieType: DieType
): number | undefined => {
  switch (dieType) {
    case DieType.D2:
      return -2;
    case DieType.D13:
      return 1;
    case DieType.D14:
      return 2;
  }
};

export const getBaseDie = (
  rollTarget: Rollable,
  character: Character
): DieType => {
  if (rollableIsSkill(rollTarget)) {
    if (character.skills && character.skills[rollTarget]) {
      return character.skills[rollTarget];
    }
    if (
      characterHasEdge(Edge.JackOfAllTrades, character) &&
      SkillLinkedAttribute[rollTarget] === Attribute.Smarts
    ) {
      return DieType.D4;
    }
  }

  if (rollableIsAttribute(rollTarget)) {
    return character.attributes[rollTarget];
  }

  return DieType.D2;
};

export const stepDieType = (dieType: DieType, step: number): DieType => {
  const dieTypeList = Object.values(DieType);
  const currentDieTypeIndex = dieTypeList.indexOf(dieType);
  const steppedDieTypeIndex = currentDieTypeIndex + step;

  // D14 is max, D2 is min
  if (steppedDieTypeIndex >= dieTypeList.length) {
    return DieType.D14;
  }
  if (steppedDieTypeIndex < 0) {
    return DieType.D2;
  }

  return (
    getEnumByString(dieTypeList[steppedDieTypeIndex], DieType) ?? DieType.D2
  );
};
