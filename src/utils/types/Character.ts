import { Attribute, DieType, Edge, Rank, Skill } from "../enums";
import { Weapon } from "../enums/Weapon";
import { Effect } from "./Effect";

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
  edges?: Record<Edge, true> | undefined;
  hindrances?: Record<string, true>;
  weapons?: Record<Weapon, number>; // Should store current ammo as value
  powers?: Record<string, true>; // Should store current power points as value if weird science maybe?
  gear?: Record<string, true>;
  effects?: Effect[];
};
