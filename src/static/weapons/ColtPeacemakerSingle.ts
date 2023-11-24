import { DieType, Skill } from "../../utils/enums";
import { Weapon } from "../../utils/enums/Weapon";
import { Effect } from "../../utils/types/Effect";
import { StandardRange } from "./Range";
import {
  AmmoWeaponDetail,
  WeaponAttack,
  WeaponType,
} from "../../utils/types/WeaponDetailType";

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
    ...StandardRange,
  },
  {
    name: "Fan the Hammer",
    skill: Skill.Shooting,
    attackModifier: -4,
    rateOfFire: "all",
    damage: {
      dieTypes: [DieType.D6, DieType.D6],
      damageModifier: 1,
    },
    ammoCost: "all",
    ...StandardRange,
  },
];

const effects: Effect[] = [];

export const ColtPeacemakerSingle: AmmoWeaponDetail = {
  key: Weapon.ColtPeacemakerSingle,
  name: "Colt Peacemaker (Single Action)",
  type: WeaponType.Ammo,
  currentAmmo: 0,
  maxAmmo: 6,
  armorPen: 1,
  attacks: attacks,
  effects: effects,
};
