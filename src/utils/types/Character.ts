import { Attribute, DieType, Edge, Rank, Skill } from "../enums";
import { Effect } from "./Effect";

export type Character = {
  id: string;
  ownerId: string;
  firstName: string;
  lastName: string;
  rank: Rank;
  currentPowerPoints: number;
  wounds: number;
  fatigue: number;
  shaken: boolean;
  currency: number;
  attributes: Record<Attribute, DieType>;
  skills: Record<Skill, DieType> | undefined;
  edges: Record<Edge, true> | undefined;
  hindrances: Record<string, true> | undefined;
  weapons: Record<string, true> | undefined; // Should store current ammo as value
  powers: Record<string, true> | undefined; // Should store current power points as value if weird science maybe?
  gear: Record<string, true> | undefined;
  effects: Effect[] | undefined;
};
