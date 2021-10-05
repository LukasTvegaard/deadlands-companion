import { DieType } from "../enums/DieType";
import { Stat } from "../enums/Stat";

export type StatRequirement = {
  stat: Stat;
  dieType: DieType;
};
