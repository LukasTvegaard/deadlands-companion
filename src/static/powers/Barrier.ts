import { Power } from "../../utils/enums/Power";
import { PowerDetailType, PowerType } from "../../utils/types/PowerDetailType";
import { StandardRangeMelee } from "../weapons/Range";

export const Barrier: PowerDetailType = {
  key: Power.Barrier,
  name: "Barrier",
  currentPowerPoints: 0,
  variants: [
    {
      type: PowerType.Utility,
      name: "Barrier",
      powerPointCost: 1,
      activationModifier: 0,
      extensionPowerPointCost: 1,
      duration: 3,
      notes: `Create a solid, immobile wall out of a chosen material. It has a Toughness of 10 and covers 1 inch. \n
      Can be cast multiple times on the same turn to cover more area, but each segment must be connected.`,
      ...StandardRangeMelee,
    },
  ],
};
