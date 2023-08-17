import { DerivedStat } from "../../utils/enums/DerivedStat";
import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";
import { EffectVariant } from "../../utils/types/Effect";

export const Tenderfoot: HindranceDetailType = {
  key: Hindrance.Tenderfoot,
  name: "Tenderfoot",
  description:
    "Some aren't cut out for the dangers that await on the wild frontier, and your hero is one such greenhorn. Your poor hero suffers -1 Grit as a result of his inexperience in the ways of the West.",
  description_short: "-1 Grit.",
  effects: [
    {
      target: DerivedStat.Grit,
      effectVariant: EffectVariant.ModifyFlat,
      value: -1,
    },
  ],
};
