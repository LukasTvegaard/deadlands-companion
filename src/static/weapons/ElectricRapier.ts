import { Attribute, DieType, Skill } from "../../utils/enums";
import { Weapon } from "../../utils/enums/Weapon";
import { Effect } from "../../utils/types/Effect";
import { StandardRangeMelee } from "./Range";
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
    ...StandardRangeMelee,
  },
];

const effects: Effect[] = [];

export const ElectricRapier: NoAmmoWeaponDetail = {
  key: Weapon.ElectricRapier,
  name: "ElectricRapier",
  type: WeaponType.NoAmmo,
  armorPen: 2,
  attacks: attacks,
  effects: effects,
};
