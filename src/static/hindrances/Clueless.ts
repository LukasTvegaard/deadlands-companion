import { Skill } from "../../utils/enums";
import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";
import { EffectVariant } from "../../utils/types/Effect";

export const Clueless: HindranceDetailType = {
  key: Hindrance.Clueless,
  name: "Clueless",
  description:
    "Your hero isn't as aware of the world as most others. They suffer -2 to Common Knowledge rolls.",
  description_short: "-2 to Common Knowledge rolls.",
  effects: [
    {
      target: Skill.KnowledgeCommon,
      effectVariant: EffectVariant.ModifyFlat,
      value: -2,
    },
  ],
};
