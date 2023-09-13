import { Skill } from "../enums";
import { Weapon } from "../enums/Weapon";
import { DamageType } from "./DamageType";
import { Effecting } from "./Effect";

export enum WeaponType {
  Ammo = "Ammo",
  NoAmmo = "NoAmmo",
}

export type WeaponAttack = {
  name: string;
  skill: Skill;
  attackModifier: number;
  rateOfFire: number | "all";
  damage: DamageType;
  ammoCost: number | "all";
  rangeShort: number;
  rangeMedium: number;
  rangeLong: number;
  notes?: string;
};

interface WeaponDetailBase extends Effecting {
  key: Weapon;
  name: string;
  type: WeaponType;
  armorPen: number;
  attacks: WeaponAttack[];
}

export interface NoAmmoWeaponDetail extends WeaponDetailBase {
  type: WeaponType.NoAmmo;
}

export interface AmmoWeaponDetail extends WeaponDetailBase {
  type: WeaponType.Ammo;
  currentAmmo: number;
  maxAmmo: number;
}

export type WeaponDetailType = NoAmmoWeaponDetail | AmmoWeaponDetail;
