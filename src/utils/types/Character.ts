import { Attribute, DieType, Edge, Rank, Skill } from "../enums";
import { Effect } from "./Effect";

export type Character = {
  id: string;
  ownerId: string;
  firstName: string;
  lastName: string;
  rank: Rank;
  pace: number;
  currentPowerPoints: number;
  wounds: number;
  fatigue: number;
  shaken: boolean;
  currency: number;
  attributes: Record<Attribute, DieType>;
  skills: Record<Skill, DieType>;
  edges: Record<Edge, true>;
  hindrances: Record<string, true>;
  weapons: Record<string, true>; // Should store current ammo as value
  powers: Record<string, true>; // Should store current power points as value if weird science maybe?
  gear: Record<string, true>;
  effects: Effect[];
};
