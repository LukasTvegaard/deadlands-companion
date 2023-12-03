import { Power } from "../../utils/enums/Power";
import { PowerDetailType, PowerType } from "../../utils/types/PowerDetailType";
import { StandardRangeSmarts } from "../weapons/Range";

export const ElementalManipulationEarth: PowerDetailType = {
  key: Power.ElementalManipulationEarth,
  name: "Elemental Manipulation (Earth)",
  currentPowerPoints: 0,
  variants: [
    {
      type: PowerType.Utility,
      name: "Elemental Manipulation (Earth)",
      powerPointCost: 1,
      activationModifier: 0,
      duration: 1,
      notes: `The caster can open a one-foot square hole in soft earth (or half that in stone), or cause a spray of dust that might blind an opponent (like using the Trick manuver, but using Spellcasting).`,
      ...StandardRangeSmarts,
    },
  ],
};
