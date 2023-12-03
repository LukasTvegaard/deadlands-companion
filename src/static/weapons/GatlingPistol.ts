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
    attackModifier: -2,
    rateOfFire: 2,
    damage: {
      dieTypes: [DieType.D6, DieType.D6],
      damageModifier: 1,
    },
    ammoCost: 1,
    ...StandardRangeMedium,
  },
];

const effects: Effect[] = [];

export const GatlingPistol: AmmoWeaponDetail = {
  key: Weapon.GatlingPistol,
  name: "Gatling Pistol",
  type: WeaponType.Ammo,
  currentAmmo: 0,
  maxAmmo: 12,
  armorPen: 1,
  attacks: attacks,
  effects: effects,
};
