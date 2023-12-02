import { DerivedStat } from "../../utils/enums/DerivedStat";
import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";
import { EffectVariant } from "../../utils/types/Effect";

export const Eccentricity: HindranceDetailType = {
  key: Hindrance.Eccentricity,
  name: "Eccentricity",
  description:
    "Your hero is an eccentric. They exhibit some strange behavior of your choice with regular intervals. The condition is harmless and amusing, though occasionally annoying, lowering your hero's Charisma by 1.",
  description_short:
    "-1 charisma due to exhibiting a behavior generally considered strange.",
  effects: [
    {
      target: DerivedStat.Charisma,
      effectVariant: EffectVariant.ModifyFlat,
      value: -1,
    },
  ],
};
