import { Attribute, DieType, Skill } from "../../utils/enums";
import { Weapon } from "../../utils/enums/Weapon";
import { Effect } from "../../utils/types/Effect";
import { StandardRangeMelee } from "./Range";
import {
  AmmoWeaponDetail,
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
      damageModifier: 0,
    },
    ammoCost: 0,
    ...StandardRangeMelee,
    notes: `Damage counts as magical.`,
  },
  {
    name: "Burst",
    skill: Skill.WeirdScience,
    attackModifier: 0,
    rateOfFire: 1,
    damage: {
      dieTypes: [DieType.D10, DieType.D10],
      damageModifier: 0,
    },
    ammoCost: "all",
    rangeShort: "Cone",
    rangeMedium: "Cone",
    rangeLong: "Cone",
    notes: `Targets within the cone may make Agility rolls versus the caster's arcane skill roll to avoid the damage. \n 
    Reloading takes 1 minute and costs $5 worth of Ghost Rock.`,
  },
];

const effects: Effect[] = [];

export const HellstrommesCane: AmmoWeaponDetail = {
  key: Weapon.HellstrommesCane,
  name: "Hellstromme's Cane",
  type: WeaponType.Ammo,
  currentAmmo: 0,
  maxAmmo: 1,
  armorPen: 0,
  attacks: attacks,
  effects: effects,
};
