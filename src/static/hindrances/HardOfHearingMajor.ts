import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const HardOfHearingMajor: HindranceDetailType = {
  key: Hindrance.HardOfHearingMajor,
  name: "Hard of Hearing (Major)",
  description:
    "Your character is deaf. They automatically fail any roll that depend on hearing and struggle to communicate with most people.",
  description_short: "Automatically fail any roll that depends on hearing.",
  effects: [],
};
