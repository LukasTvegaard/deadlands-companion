import { Power } from "../../utils/enums/Power";
import { PowerDetailType } from "../../utils/types/PowerDetailType";
import { Armor } from "./Armor";
import { Barrier } from "./Barrier";
import { Bolt } from "./Bolt";
import { BoostLowerTrait } from "./BoostLowerTrait";
import { Burst } from "./Burst";
import { ElementalManipulationEarth } from "./ElementalManipulation";
import { Healing } from "./Healing";
import { Hunch } from "./Hunch";
import { MindReading } from "./MindReading";
import { Quickness } from "./Quickness";
import { ShapeChange } from "./ShapeChange";
import { Shootist } from "./Shootist";
import { Slumber } from "./Slumber";
import { Smite } from "./Smite";
import { Telekinesis } from "./Telekinesis";

export type PowerDetails = {
  [key in Power]: PowerDetailType;
};
export const Powers: PowerDetails = {
  [Power.Armor]: Armor,
  [Power.Barrier]: Barrier,
  [Power.Bolt]: Bolt,
  [Power.BoostLowerTrait]: BoostLowerTrait,
  [Power.Burst]: Burst,
  [Power.ElementalManipulationEarth]: ElementalManipulationEarth,
  [Power.Healing]: Healing,
  [Power.Hunch]: Hunch,
  [Power.MindReading]: MindReading,
  [Power.Quickness]: Quickness,
  [Power.ShapeChange]: ShapeChange,
  [Power.Shootist]: Shootist,
  [Power.Slumber]: Slumber,
  [Power.Smite]: Smite,
  [Power.Telekinesis]: Telekinesis,
};

export const ListOfPowers: PowerDetailType[] = Object.values(Powers);
