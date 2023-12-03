import { DieType, Skill } from "../../utils/enums";
import { Weapon } from "../../utils/enums/Weapon";
import { Effect } from "../../utils/types/Effect";
import { StandardRangeMedium } from "./Range";
import {
  NoAmmoWeaponDetail,
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
      damageModifier: 0,
    },
    ammoCost: 0,
    ...StandardRangeMedium,
  },
];

const effects: Effect[] = [];

export const Bow: NoAmmoWeaponDetail = {
  key: Weapon.Bow,
  name: "Bow",
  type: WeaponType.NoAmmo,
  armorPen: 0,
  attacks: attacks,
  effects: effects,
};
