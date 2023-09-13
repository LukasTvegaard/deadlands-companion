import { DieType, Skill } from "../../utils/enums";
import { Weapon } from "../../utils/enums/Weapon";
import { Effect } from "../../utils/types/Effect";
import {
  AmmoWeaponDetail,
  WeaponAttack,
  WeaponType,
} from "../../utils/types/WeaponDetailType";
import { StandardRange } from "./WeaponUtil";

const attacks: WeaponAttack[] = [
  {
    name: "Shoot",
    skill: Skill.Shooting,
    attackModifier: 0,
    rateOfFire: 1,
    damage: {
      dieTypes: [DieType.D6, DieType.D6],
      damageModifier: 1,
    },
    ammoCost: 1,
    rangeShort: 12,
    rangeMedium: 24,
    rangeLong: 48,
  },
  {
    name: "Double Tap",
    skill: Skill.Shooting,
    attackModifier: 1,
    rateOfFire: 1,
    damage: {
      dieTypes: [DieType.D6, DieType.D6],
      damageModifier: 2,
    },
    ammoCost: 2,
    ...StandardRange,
  },
];

const effects: Effect[] = [];

export const ColtPeacemakerDouble: AmmoWeaponDetail = {
  key: Weapon.ColtPeacemakerDouble,
  name: "Colt Peacemaker (Double Action)",
  type: WeaponType.Ammo,
  currentAmmo: 0,
  maxAmmo: 6,
  armorPen: 1,
  attacks: attacks,
  effects: effects,
};
