import { Skill } from "../../utils/enums";
import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";
import { EffectVariant } from "../../utils/types/Effect";

export const Yellow: HindranceDetailType = {
  key: Hindrance.Yellow,
  name: "Yellow",
  description:
    "Not everyone has ice water in their veins. Your hero is squeamish and the sight of blood and gore and terrified of coming to harm. They suffer a -2 penalty to any Guts roll.",
  description_short: "-2 to Guts rolls.",
  effects: [
    {
      target: Skill.Guts,
      effectVariant: EffectVariant.ModifyFlat,
      value: -2,
    },
  ],
};
