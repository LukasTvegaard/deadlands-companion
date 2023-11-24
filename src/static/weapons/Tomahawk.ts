import { Attribute, DieType, Skill } from "../../utils/enums";
import { Weapon } from "../../utils/enums/Weapon";
import { Effect } from "../../utils/types/Effect";
import { StandardMelee, StandardRangeShort } from "./Range";
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
      dieTypes: [Attribute.Strength, DieType.D6],
      damageModifier: 0,
    },
    ammoCost: 0,
    ...StandardMelee,
  },
  {
    name: "Throw",
    skill: Skill.Throwing,
    attackModifier: 0,
    rateOfFire: 1,
    damage: {
      dieTypes: [Attribute.Strength, DieType.D6],
      damageModifier: 0,
    },
    ammoCost: "all",
    ...StandardRangeShort,
  },
];

const effects: Effect[] = [];

export const Tomahawk: NoAmmoWeaponDetail = {
  key: Weapon.Tomahawk,
  name: "Tomahawk",
  type: WeaponType.NoAmmo,
  armorPen: 0,
  attacks: attacks,
  effects: effects,
};
