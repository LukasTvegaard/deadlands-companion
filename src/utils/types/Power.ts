import { Power } from "../enums/Power";
import { DamageType } from "./DamageType";

export type PowerAttack = {
  name: string;
  attackModifier: number;
  rateOfFire: number | "all";
  damage: DamageType;
  powerPointCost: number | "all";
  rangeShort: number;
  rangeMedium: number;
  rangeLong: number;
  notes?: string;
};

export interface PowerDetailType {
  key: Power;
  name: string;
  armorPen: number;
  attacks: PowerAttack[];
}
