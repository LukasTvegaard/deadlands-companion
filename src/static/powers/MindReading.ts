import { Power } from "../../utils/enums/Power";
import { PowerDetailType, PowerType } from "../../utils/types/PowerDetailType";
import { StandardRangeMelee } from "../weapons/Range";

export const MindReading: PowerDetailType = {
  key: Power.MindReading,
  name: "Mind Reading",
  currentPowerPoints: 0,
  variants: [
    {
      type: PowerType.Utility,
      name: "Mind Reading",
      powerPointCost: 3,
      activationModifier: 0,
      duration: 1,
      notes: `Allows your character to read another character's thoughts. This is an opposed roll versus the target's Smarts. \n
      A success allow the character to gain one truthful answer from the subject. \n
      The target is aware of the mental intrusion unless the mind reader gets a raise.`,
      ...StandardRangeMelee,
    },
  ],
};
