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
      dieTypes: [Attribute.Strength, DieType.D4],
      damageModifier: 0,
    },
    ammoCost: 0,
    ...StandardRangeMelee,
    notes: `Allows performing a ritual by making a deep cut into your own flesh, or the flesh of an ally, as a free action. \n
    The target must make a Spirit roll:
    On a Failure, the target suffers a wound.
    On a Success, the unhallowed blade gains +2 damage until combat ends, or +4 damage on a Raise.`,
  },
];

const effects: Effect[] = [];

export const UnhallowedBlade: NoAmmoWeaponDetail = {
  key: Weapon.UnhallowedBlade,
  name: "Unhallowed Blade",
  type: WeaponType.NoAmmo,
  armorPen: 0,
  attacks: attacks,
  effects: effects,
};
