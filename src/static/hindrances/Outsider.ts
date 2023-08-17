import { DerivedStat } from "../../utils/enums/DerivedStat";
import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";
import { EffectVariant } from "../../utils/types/Effect";

export const Outsider: HindranceDetailType = {
  key: Hindrance.Outsider,
  name: "Outsider",
  description:
    "In a society made up of only a few types of people, your hero isn't one of them. Locals are likely to raise the prices on th Outsider, ignore pleas for help, and generally treat them as if they are of a lower class than the rest of their society. You hero's Charisma suffers a -2 modifier among all but their own people.",
  description_short:
    "Treated like an outsider. -2 Charisma except when among own people.",
  effects: [
    {
      target: DerivedStat.Charisma,
      effectVariant: EffectVariant.ModifyFlat,
      value: -2,
    },
  ],
};
