import { Power } from "../../utils/enums/Power";
import { PowerDetailType, PowerType } from "../../utils/types/PowerDetailType";
import { StandardRangeSmarts } from "../weapons/Range";

export const Telekinesis: PowerDetailType = {
  key: Power.Telekinesis,
  name: "Telekinesis",
  currentPowerPoints: 0,
  variants: [
    {
      type: PowerType.Utility,
      name: "Telekinesis",
      powerPointCost: 5,
      activationModifier: 0,
      duration: 3,
      extensionPowerPointCost: 1,
      notes: `Allows moving a single object or creature with arcane will. The weight a caster can lift is equal to 10 lbs. times their Spirit die type, or 50 lbs. times their Spirit die type on a Raise. \n
      The object or creature can be moved up to the caster's Smarts in inches per turn, in any direction. \n
      If the object or creature is sentient, it may try to resist the power with an opposed Spirit roll.
      `,
      ...StandardRangeSmarts,
    },
  ],
};
