import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const HardOfHearingMinor: HindranceDetailType = {
  key: Hindrance.HardOfHearingMinor,
  name: "Hard of Hearing (Minor)",
  description:
    "Your character has lost some of their hearing. You subtract 2 from all Notice rolls made to hear.",
  description_short: "-2 to Notice rolls that depend on hearing.",
  effects: [],
};
