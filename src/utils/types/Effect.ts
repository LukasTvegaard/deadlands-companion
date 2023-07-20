import { Rollable } from "./Rollable";

export enum EffectVariant {
  ModifyDie = "ModifyDie",
  ModifyFlat = "ModifyFlat",
}

export type Effect = {
  target: Rollable | "Damage" | "All";
  effectVariant: EffectVariant;
  value: number;
  customCondition?: string; // FIXME: Custom condition should be an enum of all possible custom conditions (e.g. onlyNonCombat, onlyMagic, etc)
  // FIXME: Figure out how to make duration work
};

export type Effectable = {
  effects: Effect[];
};
