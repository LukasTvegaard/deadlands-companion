import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";
import { GrimServant } from "./GrimServant";

export type HindranceDetails = {
  [key in Hindrance]: HindranceDetailType;
};
export const Hindrances: HindranceDetails = {
  // Background Edges
  [Hindrance.GrimServant]: GrimServant,
};

export const HindranceList = Object.values(Hindrances);
