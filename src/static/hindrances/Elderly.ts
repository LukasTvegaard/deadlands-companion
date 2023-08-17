import { Attribute } from "../../utils/enums";
import { DerivedStat } from "../../utils/enums/DerivedStat";
import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";
import { EffectVariant } from "../../utils/types/Effect";

export const Elderly: HindranceDetailType = {
  key: Hindrance.Elderly,
  name: "Elderly",
  description:
    "Your adventurer is getting on in years, but not quite ready for the nursing home. Their pace is reduced by 1, and their Strength and Vigor are reduced by one die. On the plus side, they gain 5 extra skill points that may be spent on any skill linked to Smarts.",
  description_short:
    "Your hero is old. -1 pace, -1 die type to both Strength and Vigor.",
  effects: [
    {
      target: DerivedStat.Pace,
      effectVariant: EffectVariant.ModifyFlat,
      value: -1,
    },
    {
      target: Attribute.Strength,
      effectVariant: EffectVariant.ModifyDie,
      value: -1,
    },
    {
      target: Attribute.Vigor,
      effectVariant: EffectVariant.ModifyDie,
      value: -1,
    },
  ],
};
