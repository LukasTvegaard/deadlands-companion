import { DieType, Skill } from "../../utils/enums";
import { Weapon } from "../../utils/enums/Weapon";
import { Effect } from "../../utils/types/Effect";
import {
  AmmoWeaponDetail,
  WeaponAttack,
  WeaponType,
} from "../../utils/types/WeaponDetailType";

const LeMatShotgunBase = {
  skill: Skill.Shooting,
  attackModifier: 2,
  rateOfFire: 1,
  damage: {
    damageModifier: 0,
  },
  ammoCost: 1,
};

const attacks: WeaponAttack[] = [
  {
    ...LeMatShotgunBase,
    name: "Shoot (Short)",
    damage: {
      ...LeMatShotgunBase.damage,
      dieTypes: [DieType.D6, DieType.D6, DieType.D6],
    },
    rangeShort: 5,
    rangeMedium: 5,
    rangeLong: 5,
  },
  {
    ...LeMatShotgunBase,
    name: "Shoot (Medium)",
    damage: {
      ...LeMatShotgunBase.damage,
      dieTypes: [DieType.D6, DieType.D6],
    },
    rangeShort: 10,
    rangeMedium: 10,
    rangeLong: 10,
  },
  {
    ...LeMatShotgunBase,
    name: "Shoot (Long)",
    damage: {
      ...LeMatShotgunBase.damage,
      dieTypes: [DieType.D6, DieType.D6, DieType.D6],
    },
    rangeShort: 20,
    rangeMedium: 20,
    rangeLong: 20,
  },
];

const effects: Effect[] = [];

export const LeMatGrapeshotShotgun: AmmoWeaponDetail = {
  key: Weapon.LeMatGrapeshotShotgun,
  name: "LeMat Grapeshot (Shotgun barrel)",
  type: WeaponType.Ammo,
  currentAmmo: 0,
  maxAmmo: 1,
  armorPen: 0,
  attacks: attacks,
  effects: effects,
};
