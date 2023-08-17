import { DerivedStat } from "../../utils/enums/DerivedStat";
import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";
import { EffectVariant } from "../../utils/types/Effect";

export const Mean: HindranceDetailType = {
  key: Hindrance.Mean,
  name: "Mean",
  description:
    "This fellow is ill-tempered and disagreeable. No one really likes them, and they have trouble doing anything for anyone else. They must be paid for their troubles and don't even accept awards graciously. The character suffers -2 to their Charisma.",
  description_short: "-2 Charisma. Reluctant to help anybody.",
  effects: [
    {
      target: DerivedStat.Charisma,
      effectVariant: EffectVariant.ModifyFlat,
      value: -2,
    },
  ],
};
