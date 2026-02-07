import { Attribute, DieType, Skill } from "../../utils/enums";
import { Weapon } from "../../utils/enums/Weapon";
import { Effect, EffectVariant } from "../../utils/types/Effect";
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
      dieTypes: [Attribute.Strength, DieType.D6],
      damageModifier: 0,
    },
    ammoCost: 0,
    rangeShort: 1,
    rangeMedium: 1,
    rangeLong: 1,
  },
];

const effects: Effect[] = [
  {
    target: DerivedStat.Parry,
    effectVariant: EffectVariant.ModifyFlat,
    value: -1,
  },
];

export const FlyingCrescent: NoAmmoWeaponDetail = {
  key: Weapon.FlyingCrescent,
  name: "Flying Crescent",
  type: WeaponType.NoAmmo,
  armorPen: 0,
  attacks: attacks,
  effects: effects,
};
