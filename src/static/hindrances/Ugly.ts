import { DerivedStat } from "../../utils/enums/DerivedStat";
import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";
import { EffectVariant } from "../../utils/types/Effect";

export const Ugly: HindranceDetailType = {
  key: Hindrance.Ugly,
  name: "Ugly",
  description:
    "Unfortunately, this individual hit more than a few ugly sticks on their way down the tree of life. Their Charisma is lowered by 2, and they will generally find courtship of any kind difficult.",
  description_short: "-2 Charisma.",
  effects: [
    {
      target: DerivedStat.Charisma,
      effectVariant: EffectVariant.ModifyFlat,
      value: -2,
    },
  ],
};
