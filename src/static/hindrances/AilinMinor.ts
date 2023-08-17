import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const AilinMinor: HindranceDetailType = {
  key: Hindrance.AilinMinor,
  name: "Ailin' (Minor)",
  description:
    "Like Doc Holliday, your hero has a reservation with the undertaker. The cause of their future demise is something like consumption, diabetes, or cancer. A cowpoke with this hindrance subtracts 1 from Fatigue rolls made to resist physical exertion. At the end of every game session, your cowpoke must make a vigor roll. On failure, the disease gets worse and you instead receive the Major version of this hindrance.",
  description_short:
    "-1 to any roll to resist Fatigue. Vigor roll at the end of every game session - failure causes disease to get worse.",
  effects: [],
};
