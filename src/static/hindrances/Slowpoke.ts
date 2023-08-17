import { DerivedStat } from "../../utils/enums/DerivedStat";
import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";
import { EffectVariant } from "../../utils/types/Effect";

export const Slowpoke: HindranceDetailType = {
  key: Hindrance.Slowpoke,
  name: "Slowpoke",
  description:
    "Molasses on a cold day moves faster than your hero. Reduce their pace by 1",
  description_short: "-1 pace.",
  effects: [
    {
      target: DerivedStat.Pace,
      effectVariant: EffectVariant.ModifyFlat,
      value: 1,
    },
  ],
};
