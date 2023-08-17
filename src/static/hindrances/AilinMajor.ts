import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const AilinMajor: HindranceDetailType = {
  key: Hindrance.AilinMajor,
  name: "Ailin' (Major)",
  description:
    "Like Doc Holliday, your hero has a reservation with the undertaker. The cause of their future demise is something like consumption, diabetes, or cancer. A cowpoke with this hindrance subtracts 2 from Fatigue rolls made to resist physical exertion. At the end of every game session, your cowpoke must make a vigor roll. On failure, the disease gets worse and your hero dies by the end of the next game session.",
  description_short:
    "-2 to any roll to resist Fatigue. Vigor roll at the end of every game session - failure causes the impending death of the character.",
  effects: [],
};
