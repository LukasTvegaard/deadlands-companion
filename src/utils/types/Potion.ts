import { Power } from "../enums/Power";

export type Potion = {
  id: string;
  power: Power;
  isRaise: boolean;
  createdBy: string; // id of the character who created the potion
  possessedBy: string; // id of the character who currently possesses the potion
  powerPointCost: number;
};

export type PotionData = Omit<Potion, "id">;
