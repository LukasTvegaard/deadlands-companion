import { Power } from "../../utils/enums/Power";
import { PowerDetailType, PowerType } from "../../utils/types/PowerDetailType";
import { StandardRangeMelee } from "../weapons/Range";

export const Smite: PowerDetailType = {
  key: Power.Smite,
  name: "Smite",
  currentPowerPoints: 0,
  variants: [
    {
      type: PowerType.Utility,
      name: "Smite",
      powerPointCost: 2,
      activationModifier: 0,
      extensionPowerPointCost: 1,
      duration: 3,
      notes: `This power is cast on a weapon of any kind. While the spell is in effect, the weapon's damage is increased by +2, or +4 with a Raise. \n
      Spend 1 additional Power Point to affect an additional target, up to 5.`,
      ...StandardRangeMelee,
    },
  ],
};
