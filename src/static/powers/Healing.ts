import { Power } from "../../utils/enums/Power";
import {
  PowerDetailType,
  PowerType,
  PowerVariantHealing,
} from "../../utils/types/PowerDetailType";
import { StandardRangeMelee } from "../weapons/Range";

const heal: PowerVariantHealing = {
  type: PowerType.Healing,
  name: "Healing",
  powerPointCost: 3,
  activationModifier: 0,
  targets: 1,
  notes:
    "Remove a wound from your target with a success, or two wounds with a raise. \n \n The roll suffers an additional penalty equal to the target's wounds. \n \n Healing has no effect on wounds older than 1 hour. \n \n Healing can also be used to cure poison and disease if used within 10 minutes.",
  ...StandardRangeMelee,
};

const variants = [heal];

export const Healing: PowerDetailType = {
  key: Power.Healing,
  name: "Healing",
  currentPowerPoints: 0,
  variants: variants,
};
