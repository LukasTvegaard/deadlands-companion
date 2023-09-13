import { Weapon } from "../../utils/enums/Weapon";
import { WeaponDetailType } from "../../utils/types/WeaponDetailType";
import { ColtPeacemakerDouble } from "./ColtPeacemakerDouble";
import { ColtPeacemakerSingle } from "./ColtPeacemakerSingle";
import { Tomahawk } from "./Tomahawk";

export type WeaponDetails = {
  [key in Weapon]: WeaponDetailType;
};
export const Weapons: WeaponDetails = {
  [Weapon.ColtPeacemakerSingle]: ColtPeacemakerSingle,
  [Weapon.ColtPeacemakerDouble]: ColtPeacemakerDouble,
  [Weapon.Tomahawk]: Tomahawk,
};

export const WeaponList = Object.values(Weapons);
