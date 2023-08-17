import { DerivedStat } from "../../utils/enums/DerivedStat";
import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";
import { EffectVariant } from "../../utils/types/Effect";

export const Obese: HindranceDetailType = {
  key: Hindrance.Obese,
  name: "Obese",
  description:
    "Particularly large people often have great difficulty in dangerous physical situations. An Obese hero adds 1 to their Toughness, but their pace is decreased by 1 and their running die is 1 die type lower. Obese characters may also have difficulty finding armor or clothing that fits, and might struggle to squeeze into tight spaces.",
  description_short:
    "+1 Toughness. -1 Pace. Running die is reduced by 1. Struggle to fit in clothing, armor, and narrow spaces.",
  effects: [
    {
      target: DerivedStat.Toughness,
      effectVariant: EffectVariant.ModifyFlat,
      value: 1,
    },
    {
      target: DerivedStat.Pace,
      effectVariant: EffectVariant.ModifyFlat,
      value: -1,
    },
    {
      target: DerivedStat.RunningDie,
      effectVariant: EffectVariant.ModifyDie,
      value: -1,
    },
  ],
};
