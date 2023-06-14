import { Attribute, Skill } from "../enums";

export enum EffectVariant {
  ModifyDie = "ModifyDie",
  ModifyFlat = "ModifyFlat",
}

export type Effect = {
  target: Attribute | Skill | "All";
  effectVariant: EffectVariant;
  value: number;
  customCondition?: string; // FIXME: Custom condition should be an enum of all possible custom conditions (e.g. onlyNonCombat, onlyMagic, etc)
};
