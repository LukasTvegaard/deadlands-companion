import { Power } from "../../utils/enums/Power";
import { PowerDetailType } from "../../utils/types/PowerDetailType";
import { Armor } from "./Armor";
import { Bolt } from "./Bolt";
import { Healing } from "./Healing";
import { Telekinesis } from "./Telekinesis";

export type PowerDetails = {
  [key in Power]: PowerDetailType;
};
export const Powers: PowerDetails = {
  [Power.Armor]: Armor,
  [Power.Bolt]: Bolt,
  [Power.Healing]: Healing,
  [Power.Telekinesis]: Telekinesis,
};

export const PowerList = Object.values(Powers);
