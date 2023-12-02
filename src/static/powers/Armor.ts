import { Power } from "../../utils/enums/Power";
import { PowerDetailType, PowerType } from "../../utils/types/PowerDetailType";
import { StandardRangeMelee } from "../weapons/Range";

export const Armor: PowerDetailType = {
  key: Power.Armor,
  name: "Armor",
  currentPowerPoints: 0,
  variants: [
    {
      type: PowerType.Utility,
      name: "Armor",
      powerPointCost: 2,
      activationModifier: 0,
      duration: 3,
      notes: `Create a magical shield around a character. \n
          A success adds +2 Toughness, A raise adds +4 Toughness. \n
          The Toughness provided by Armor is only affected by armor-piercing from magical hits.`,
      ...StandardRangeMelee,
    },
  ],
};
