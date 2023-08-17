import { DerivedStat } from "../../utils/enums/DerivedStat";
import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";
import { EffectVariant } from "../../utils/types/Effect";

export const Bloodthirsty: HindranceDetailType = {
  key: Hindrance.Bloodthirsty,
  name: "Bloodthirsty",
  description:
    "Your hero never takes prisoners unless under direct orders and supervision from a superior. This killer suffers a -4 to charisma.",
  description_short: "Never takes prisoners. -4 Charisma.",
  effects: [
    {
      target: DerivedStat.Charisma,
      effectVariant: EffectVariant.ModifyFlat,
      value: -4,
    },
  ],
};
