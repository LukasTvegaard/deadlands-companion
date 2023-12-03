import { Power } from "../../utils/enums/Power";
import { PowerDetailType, PowerType } from "../../utils/types/PowerDetailType";
import { StandardRangeSmarts } from "../weapons/Range";

export const BoostLowerTrait: PowerDetailType = {
  key: Power.BoostLowerTrait,
  name: "Boost/Lower Trait",
  currentPowerPoints: 0,
  variants: [
    {
      type: PowerType.Utility,
      name: "Boost Trait",
      powerPointCost: 2,
      activationModifier: 0,
      duration: 3,
      extensionPowerPointCost: 1,
      addTargetPowerPointCost: 1,
      // FIXME: Better support for additional targets
      notes: `Increase any of a target's traits by one die type, or two die types on a Raise. \n
      Spend 1 additional Power Point to affect an additional target, up to 5.`,
      ...StandardRangeSmarts,
    },
    {
      type: PowerType.Utility,
      name: "Lower Trait",
      powerPointCost: 2,
      activationModifier: 0,
      duration: 3,
      extensionPowerPointCost: 1,
      addTargetPowerPointCost: 1,
      notes: `Reduce any of a target's traits by one die type, or two die types on a Raise. \n
        This is an opposed roll against the victim's spirit, and traits cannot be lowered below a d4. \n
        Spend 1 additional Power Point to affect an additional target, up to 5.`,
      ...StandardRangeSmarts,
    },
  ],
};
