import { Power } from "../../utils/enums/Power";
import { PowerDetailType, PowerType } from "../../utils/types/PowerDetailType";
import { StandardRangeSmarts } from "../weapons/Range";

export const Burrow: PowerDetailType = {
  key: Power.Burrow,
  name: "Burrow",
  currentPowerPoints: 0,
  variants: [
    {
      type: PowerType.Utility,
      name: "Burrow",
      powerPointCost: 3,
      activationModifier: 0,
      duration: 3,
      notes: `Become untargetable while burrowing (unless the attacker has means to detect and hit you through the ground). Requires raw earth within range. While underground, the caster can move up to 2x the range of the spell. \n
        Any burrowing character can attempt to surprise a foe by making an opposed Stealth versus Notice roll. Winning this roll gives +2 to attack and damage, or +4 with a raise. Attempting to surprise a foe ends the effect of Burrow. \n
      Spend 1 additional Power Point to affect an additional target, up to 5.`,
      extensionPowerPointCost: 2,
      addTargetPowerPointCost: 1,
      ...StandardRangeSmarts,
    },
  ],
};
