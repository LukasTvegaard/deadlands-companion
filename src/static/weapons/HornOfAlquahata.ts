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
    attackModifier: -1,
    rateOfFire: 1,
    damage: {
      dieTypes: [Attribute.Strength, DieType.D4],
      damageModifier: -1,
    },
    ammoCost: 0,
    ...StandardRangeMelee,
    notes: `Damage counts as magical.`,
  },
];

const effects: Effect[] = [];

export const HornOfAlquahata: NoAmmoWeaponDetail = {
  key: Weapon.HornOfAlquahata,
  name: "Horn Of Alquahata",
  type: WeaponType.NoAmmo,
  armorPen: 0,
  attacks: attacks,
  effects: effects,
};
