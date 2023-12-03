import { Power } from "../../utils/enums/Power";
import { PowerDetailType, PowerType } from "../../utils/types/PowerDetailType";
import { StandardRangeMelee } from "../weapons/Range";

export const Hunch: PowerDetailType = {
  key: Power.Hunch,
  name: "Hunch",
  currentPowerPoints: 0,
  variants: [
    {
      type: PowerType.Utility,
      name: "Hunch",
      powerPointCost: 3,
      activationModifier: 0,
      duration: 1,
      notes: `Allows your character to get insight into the past of a person, place, or thing. \n
      A success on the roll grants the caster a hunch about some event that happened to the target object. Raises grant even more insight.`,
      ...StandardRangeMelee,
    },
  ],
};
