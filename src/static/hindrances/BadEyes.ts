import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const BadEyes: HindranceDetailType = {
  key: Hindrance.BadEyes,
  name: "Bad Eyes",
  description:
    "Your hero's eyes just aren't what they used to be. While your hero is wearing glasses there is no effect, but without glasses they suffer a -2 penalty to any roll made to shoot or Notice something more than 5\" away.",
  description_short:
    '-2 to hit or Notice anything more than 5" away when not wearing glasses.',
  effects: [], // MISSING: CONDITIONAL EFFECT
};
