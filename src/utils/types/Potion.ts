import { Power } from "../enums/Power";

export type Potion = {
  id: string;
  power: Power;
  powerVariant: string;
  isRaise: boolean;
  createdBy: string; // id of the character who created the potion
  possessedBy: string; // id of the character who currently possesses the potion
  powerPointCost: number;
  extensions: number;
  notes: string;
};

export type PotionData = Omit<Potion, "id">;
