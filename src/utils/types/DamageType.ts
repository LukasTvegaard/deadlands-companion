import { Attribute, DieType } from "../enums";

export type DamageType = {
  dieTypes: (DieType | Attribute)[];
  damageModifier: number;
};

export type DamageResult = {
  dieTypes: DieType[];
  modifier: number;
};
