import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const Illiterate: HindranceDetailType = {
  key: Hindrance.Illiterate,
  name: "Illiterate",
  description:
    "Your hero can't read. They can probably sign their name and know what a STOP sign means, but can do little else. They also don't know much about math either.",
  description_short: "Can't read or write, and struggles to do basic math.",
  effects: [],
};
