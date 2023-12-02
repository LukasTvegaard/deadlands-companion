import { Attribute } from "../enums";
import { Power } from "../enums/Power";
import { DamageType } from "./DamageType";

export enum PowerType {
  Attack = "Attack",
  Utility = "Utility",
  Healing = "Healing",
}

type PowerVariantBase = {
  type: PowerType;
  name: string;
  activationModifier: number;
  powerPointCost: number;
  rangeShort: number | Attribute;
  rangeMedium: number | Attribute;
  rangeLong: number | Attribute;
  notes?: string;
};

export interface PowerVariantAttack extends PowerVariantBase {
  type: PowerType.Attack;
  armorPen: number;
  rateOfFire: number;
  damage: DamageType;
}

export interface PowerVariantUtility extends PowerVariantBase {
  type: PowerType.Utility;
  duration: number;
  extensionPowerPointCost?: number;
  notes: string;
}

export interface PowerVariantHealing extends PowerVariantBase {
  type: PowerType.Healing;
  targets: number;
  notes: string;
}

export type PowerVariant =
  | PowerVariantAttack
  | PowerVariantUtility
  | PowerVariantHealing;

export interface PowerDetailType {
  key: Power;
  name: string;
  currentPowerPoints: number;
  variants: PowerVariant[];
}
