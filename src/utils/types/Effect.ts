import { DerivedStat } from "../enums/DerivedStat";
import { Rollable } from "./Rollable";

export type Effectable = Rollable | DerivedStat | "Damage";

export enum EffectVariant {
  ModifyDie = "ModifyDie",
  ModifyFlat = "ModifyFlat",
}

export type Effect = {
  target: Effectable;
  effectVariant: EffectVariant;
  value: number;
  customCondition?: string; // FIXME: Custom condition should be an enum of all possible custom conditions (e.g. onlyNonCombat, onlyMagic, etc)
  // FIXME: Figure out how to make duration work
};

export type Effecting = {
  effects: Effect[];
};
