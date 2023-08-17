import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const HeavySleeper: HindranceDetailType = {
  key: Hindrance.HeavySleeper,
  name: "Heavy Sleeper",
  description:
    "A thunderstorm from Hell itself won't wake this Dozing Doolie. Once they drop off, they must make a Notice roll (-4) to wake up. They also suffer a -4 penalty to Vigor rolls made to stay awake.",
  description_short:
    "-4 to Notice rolls when sleeping. -4 to Vigor roll to stay awake.",
  effects: [], // MISSING: Conditional effect
};
