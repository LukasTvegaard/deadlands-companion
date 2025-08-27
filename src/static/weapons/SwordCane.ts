import { Attribute, DieType, Skill } from "../../utils/enums";
import { Weapon } from "../../utils/enums/Weapon";
import { Effect, EffectVariant } from "../../utils/types/Effect";
import { StandardRangeMelee } from "./Range";
import {
  NoAmmoWeaponDetail,
  WeaponAttack,
  WeaponType,
} from "../../utils/types/WeaponDetailType";
import { DerivedStat } from "../../utils/enums/DerivedStat";

const attacks: WeaponAttack[] = [
  {
    name: "Melee Attack",
    skill: Skill.Fighting,
    attackModifier: 0,
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

const effects: Effect[] = [
  {
    target: DerivedStat.Parry,
    effectVariant: EffectVariant.ModifyFlat,
    value: 1,
  },
];

export const SwordCane: NoAmmoWeaponDetail = {
  key: Weapon.Swordcane,
  name: "Sword Cane",
  type: WeaponType.NoAmmo,
  armorPen: 0,
  attacks: attacks,
  effects: effects,
};
