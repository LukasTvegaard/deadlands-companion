import { Attribute, Skill } from "../enums";
import { Unskilled } from "../enums/Skill";

export type Rollable = Attribute | Skill | typeof Unskilled;

export const rollableIsAttribute = (
  rollable: Rollable
): rollable is Attribute => {
  return rollable in Attribute;
};

export const rollableIsSkill = (rollable: Rollable): rollable is Skill => {
  return rollable in Skill;
};
