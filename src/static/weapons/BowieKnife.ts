import { Attribute, DieType, Skill } from "../../utils/enums";
import { Weapon } from "../../utils/enums/Weapon";
import { Effect } from "../../utils/types/Effect";
import { StandardRangeMelee, StandardRangeShort } from "./Range";
import {
  NoAmmoWeaponDetail,
  WeaponAttack,
  WeaponType,
} from "../../utils/types/WeaponDetailType";

const attacks: WeaponAttack[] = [
  {
    name: "Melee Attack",
    skill: Skill.Fighting,
    attackModifier: 0,
    rateOfFire: 1,
    damage: {
      dieTypes: [Attribute.Strength, DieType.D4],
      damageModifier: 1,
    },
    ammoCost: 0,
    ...StandardRangeMelee,
  },
  {
    name: "Throw",
    skill: Skill.Throwing,
    attackModifier: 0,
    rateOfFire: 1,
    damage: {
      dieTypes: [Attribute.Strength, DieType.D4],
      damageModifier: 1,
    },
    ammoCost: "all",
    ...StandardRangeShort,
  },
];

const effects: Effect[] = [];

export const BowieKnife: NoAmmoWeaponDetail = {
  key: Weapon.BowieKnife,
  name: "Bowie Knife",
  type: WeaponType.NoAmmo,
  armorPen: 1,
  attacks: attacks,
  effects: effects,
};
