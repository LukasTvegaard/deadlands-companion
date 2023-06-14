import { DieType } from "../enums/DieType";
import { Attribute } from "../enums/Attribute";

export type StatRequirement = {
  stat: Attribute;
  dieType: DieType;
};
