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
      dieTypes: [Attribute.Strength, DieType.D8],
      damageModifier: 0,
    },
    ammoCost: 0,
    ...StandardRangeMelee,
    notes: `While holding Hasteli's War Club, the wielders eyes glow with a fiery hue. This grants them Low Light Vision, which negates up to 4 points of darkness penalties.`,
  },
];

const effects: Effect[] = [];

export const HastelisWarClub: NoAmmoWeaponDetail = {
  key: Weapon.HastelisWarClub,
  name: "Hasteli's War Club",
  type: WeaponType.NoAmmo,
  armorPen: 0,
  attacks: attacks,
  effects: effects,
};
