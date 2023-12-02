import { DieType, Skill } from "../../utils/enums";
import { Weapon } from "../../utils/enums/Weapon";
import { Effect } from "../../utils/types/Effect";
import { StandardRangeMedium } from "./Range";
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
    ...StandardRangeMedium,
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
    ...StandardRangeMedium,
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
