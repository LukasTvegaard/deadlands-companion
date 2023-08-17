import { DerivedStat } from "../../utils/enums/DerivedStat";
import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";
import { EffectVariant } from "../../utils/types/Effect";

export const Lame: HindranceDetailType = {
  key: Hindrance.Lame,
  name: "Lame",
  description:
    "A past wound has nearly crippled your hero. Their Pace is reduced by 2 and their die type for running rolls is reduced by 1.",
  description_short: "-2 Pace. Running die reduced by 1.",
  effects: [
    {
      target: DerivedStat.Pace,
      effectVariant: EffectVariant.ModifyFlat,
      value: -2,
    },
    {
      target: DerivedStat.RunningDie,
      effectVariant: EffectVariant.ModifyDie,
      value: -1,
    },
  ],
};
