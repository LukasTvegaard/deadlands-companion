import { Power } from "../../utils/enums/Power";
import { PowerDetailType } from "../../utils/types/Power";
import { Bolt } from "./Bolt";

export type PowerDetails = {
  [key in Power]: PowerDetailType;
};
export const Powers: PowerDetails = {
  [Power.Bolt]: Bolt,
};

export const PowerList = Object.values(Powers);
