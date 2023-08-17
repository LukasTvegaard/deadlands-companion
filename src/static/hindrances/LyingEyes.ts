import { Skill } from "../../utils/enums";
import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";
import { EffectVariant } from "../../utils/types/Effect";

export const LyingEyes: HindranceDetailType = {
  key: Hindrance.LyingEyes,
  name: "Lying Eyes",
  description:
    "Lies just don't come easy to this hombre. That sounds all good and noble, but often causes problems when dealing with more nefarious types. A hero with this hindrance suffers a -2 penalty to all Intimidation and Persuasion rolls where lies must be told. This penalty also applies to Gambling rolls.",
  description_short:
    "-2 to Persuasion and Intimidation rolls if lies are involved, -2 to all Gambling rolls.",
  effects: [
    {
      target: Skill.Gambling,
      effectVariant: EffectVariant.ModifyFlat,
      value: -2,
    },
  ], // MISSING: Conditional effect
};
