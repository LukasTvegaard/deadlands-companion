import { Attribute, DieType, Edge, Rank, Skill } from "../enums";
import { Weapon } from "../enums/Weapon";
import { CustomItem } from "./CustomItem";
import { Effect } from "./Effect";
import { TemporaryEffect } from "./TemporaryEffect";

type WeaponRecord = {
  ammo: number;
  isTrademarkWeapon?: boolean;
};

export type Character = {
  id: string;
  ownerId: string;
  partyId?: string;
  isDM: boolean;
  firstName: string;
  lastName: string;
  rank: Rank;
  currentPowerPoints: number;
  wounds: number;
  fatigue: number;
  shaken: boolean;
  currency: number;
  attributes: Record<Attribute, DieType>;
  skills?: Record<Skill, DieType>;
  edges?: Record<Edge, true>;
  hindrances?: Record<string, true>;
  weapons?: Record<Weapon, WeaponRecord>;
  powers?: Record<string, number>; // Stores current powerpoints as value, but only used for weird scientists.
  gear?: Record<string, true>;
  customItems?: Record<string, CustomItem>;
  effects?: Effect[];
  temporaryEffects?: TemporaryEffect[];
};
