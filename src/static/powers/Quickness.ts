import { Power } from "../../utils/enums/Power";
import { PowerDetailType, PowerType } from "../../utils/types/PowerDetailType";
import { StandardRangeMelee } from "./../weapons/Range";

export const Quickness: PowerDetailType = {
  key: Power.Quickness,
  name: "Quickness",
  currentPowerPoints: 0,
  variants: [
    {
      type: PowerType.Utility,
      name: "Quickness",
      powerPointCost: 4,
      activationModifier: 0,
      duration: 3,
      extensionPowerPointCost: 2,
      notes: `With a success, the target has two actions per round instead of the usual one. With a raise, the target can also discard and redraw any initiative card lower than 8.`,
      ...StandardRangeMelee,
    },
  ],
};
