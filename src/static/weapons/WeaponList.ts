import { Weapon } from "../../utils/enums/Weapon";
import { WeaponDetailType } from "../../utils/types/WeaponDetailType";
import { Bow } from "./Bow";
import { BowieKnife } from "./BowieKnife";
import { ColtArmy } from "./ColtArmy";
import { ColtDragoon } from "./ColtDragoon";
import { ColtPeacemakerDouble } from "./ColtPeacemakerDouble";
import { ColtPeacemakerSingle } from "./ColtPeacemakerSingle";
import { ElectricRapier } from "./ElectricRapier";
import { GatlingPistol } from "./GatlingPistol";
import { HellstrommesCane } from "./HellstrommesCane";
import { HornOfAlquahata } from "./HornOfAlquahata";
import { Tomahawk } from "./Tomahawk";
import { UnhallowedBlade } from "./UnhallowedBlade";

export type WeaponDetails = {
  [key in Weapon]: WeaponDetailType;
};
export const Weapons: WeaponDetails = {
  [Weapon.Bow]: Bow,
  [Weapon.BowieKnife]: BowieKnife,
  [Weapon.ColtArmy]: ColtArmy,
  [Weapon.ColtDragoon]: ColtDragoon,
  [Weapon.ColtPeacemakerSingle]: ColtPeacemakerSingle,
  [Weapon.ColtPeacemakerDouble]: ColtPeacemakerDouble,
  [Weapon.ElectricRapier]: ElectricRapier,
  [Weapon.GatlingPistol]: GatlingPistol,
  [Weapon.HellstrommesCane]: HellstrommesCane,
  [Weapon.HornOfAlquahata]: HornOfAlquahata,
  [Weapon.Tomahawk]: Tomahawk,
  [Weapon.UnhallowedBlade]: UnhallowedBlade,
};

export const WeaponList = Object.values(Weapons);
