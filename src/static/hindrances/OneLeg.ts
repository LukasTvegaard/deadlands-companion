import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const OneLeg: HindranceDetailType = {
  key: Hindrance.OneLeg,
  name: "One leg",
  description:
    "Your character is missing a leg and have had it replaced with a prosthetic. They suffer -2 Pace and their running die is reduced by one. They also suffer -2 to Traits that require mobility, such as Climbing, Fighting, or Swimming.",
  description_short:
    "Missing a leg. -2 Pace. Running die reduced by 1. -2 to all traits that require mobility.",
  effects: [], // MISSING: Effects
};
