import { Power } from "../../utils/enums/Power";
import { PowerDetailType, PowerType } from "../../utils/types/PowerDetailType";
import { StandardRangeSmarts } from "../weapons/Range";

export const Slumber: PowerDetailType = {
  key: Power.Slumber,
  name: "Slumber",
  currentPowerPoints: 0,
  variants: [
    {
      type: PowerType.Utility,
      name: "Slumber",
      powerPointCost: 2,
      activationModifier: 0,
      extensionPowerPointCost: 1,
      duration: 10,
      notes: `Any living creature within a Medium Burst Template must succeed a Spirit roll (at -2 if the caster scores a Raise) or fall asleep. \n
      Loud noises awaken sleepers as if they were a normal sleeper (Notice roll, modified by the loudness of the noise).`,
      ...StandardRangeSmarts,
    },
  ],
};
