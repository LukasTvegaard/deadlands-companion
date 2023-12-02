import { DieType } from "../../utils/enums";
import { Power } from "../../utils/enums/Power";
import {
  PowerDetailType,
  PowerType,
  PowerVariant,
} from "../../utils/types/PowerDetailType";
import { StandardRangeMedium } from "../weapons/Range";

const bolt1: PowerVariant = {
  type: PowerType.Attack,
  name: "1 Bolt",
  armorPen: 0,
  activationModifier: 0,
  rateOfFire: 1,
  powerPointCost: 1,
  damage: {
    dieTypes: [DieType.D6, DieType.D6],
    damageModifier: 0,
  },
  ...StandardRangeMedium,
};

const bolt1Big: PowerVariant = {
  type: PowerType.Attack,
  name: "1 Big Bolt",
  armorPen: 0,
  activationModifier: 0,
  rateOfFire: 1,
  powerPointCost: 2,
  damage: {
    dieTypes: [DieType.D6, DieType.D6, DieType.D6],
    damageModifier: 0,
  },
  ...StandardRangeMedium,
};

const bolt2: PowerVariant = {
  type: PowerType.Attack,
  name: "2 Bolts",
  armorPen: 0,
  activationModifier: 0,
  rateOfFire: 2,
  powerPointCost: 2,
  damage: {
    dieTypes: [DieType.D6, DieType.D6],
    damageModifier: 0,
  },
  ...StandardRangeMedium,
};
const bolt2Big: PowerVariant = {
  type: PowerType.Attack,
  name: "2 Big Bolts",
  armorPen: 0,
  activationModifier: 0,
  rateOfFire: 2,
  powerPointCost: 4,
  damage: {
    dieTypes: [DieType.D6, DieType.D6, DieType.D6],
    damageModifier: 0,
  },
  ...StandardRangeMedium,
};
const bolt3: PowerVariant = {
  type: PowerType.Attack,
  name: "3 Bolts",
  armorPen: 0,
  activationModifier: 0,
  rateOfFire: 3,
  powerPointCost: 3,
  damage: {
    dieTypes: [DieType.D6, DieType.D6],
    damageModifier: 0,
  },
  ...StandardRangeMedium,
};

const bolt3Big: PowerVariant = {
  type: PowerType.Attack,
  name: "3 Big Bolts",
  armorPen: 0,
  activationModifier: 0,
  rateOfFire: 3,
  powerPointCost: 6,
  damage: {
    dieTypes: [DieType.D6, DieType.D6, DieType.D6],
    damageModifier: 0,
  },
  ...StandardRangeMedium,
};

const variants: PowerVariant[] = [
  bolt1,
  bolt1Big,
  bolt2,
  bolt2Big,
  bolt3,
  bolt3Big,
];

export const Bolt: PowerDetailType = {
  key: Power.Bolt,
  name: "Bolt",
  currentPowerPoints: 0,
  variants: variants,
};
