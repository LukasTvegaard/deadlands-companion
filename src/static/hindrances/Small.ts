import { DerivedStat } from "../../utils/enums/DerivedStat";
import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";
import { EffectVariant } from "../../utils/types/Effect";

export const Small: HindranceDetailType = {
  key: Hindrance.Small,
  name: "Small",
  description:
    "Your character is either very skinny, very short, or both. Their Toughness is reduced by 1.",
  description_short: "-1 Toughness.",
  effects: [
    {
      target: DerivedStat.Toughness,
      effectVariant: EffectVariant.ModifyFlat,
      value: -1,
    },
  ],
};
