import { Attribute, DieType, Skill } from "../../utils/enums";
import { Weapon } from "../../utils/enums/Weapon";
import { Effect, EffectVariant } from "../../utils/types/Effect";
import {
  NoAmmoWeaponDetail,
  WeaponAttack,
  WeaponType,
} from "../../utils/types/WeaponDetailType";
import { DerivedStat } from "../../utils/enums/DerivedStat";
import { StandardRangeShort } from "./Range";

const attacks: WeaponAttack[] = [
  {
    name: "Decapitate",
    skill: Skill.Fighting,
    attackModifier: -4,
    rateOfFire: 1,
    damage: {
      dieTypes: [Attribute.Strength, DieType.D6],
      damageModifier: +4,
    },
    ammoCost: 0,
    notes: `
      Only works on targets with a normal-sized head. Cannot target foes whose heads are in tight spaces or wearing large hats.
    `,
    ...StandardRangeShort,
  },
];

const effects: Effect[] = [
  {
    target: DerivedStat.Parry,
    effectVariant: EffectVariant.ModifyFlat,
    value: -2,
  },
];

export const FlyingGuillotine: NoAmmoWeaponDetail = {
  key: Weapon.FlyingGuillotine,
  name: "Flying Guillotine",
  type: WeaponType.NoAmmo,
  armorPen: 0,
  attacks: attacks,
  effects: effects,
};
