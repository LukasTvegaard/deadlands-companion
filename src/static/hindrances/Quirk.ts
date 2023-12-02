import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const Quirk: HindranceDetailType = {
  key: Hindrance.Quirk,
  name: "Quirk",
  description:
    "Your hero has some minor foible that is usually humorous, but can occasionally cause them trouble.",
  description_short: "Has a minor quirk.",
  effects: [],
};
