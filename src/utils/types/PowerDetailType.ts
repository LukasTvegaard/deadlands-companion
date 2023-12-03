import { Attribute, Rank } from "../enums";
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
  rangeShort: number | Attribute | "Cone";
  rangeMedium: number | Attribute | "Cone";
  rangeLong: number | Attribute | "Cone";
  notes?: string;
  rankRequirement?: Rank;
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
  addTargetPowerPointCost?: number;
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
