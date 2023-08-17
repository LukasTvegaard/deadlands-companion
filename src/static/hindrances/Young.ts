import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const Young: HindranceDetailType = {
  key: Hindrance.Young,
  name: "Young",
  description:
    "Children are sometimes forced to go on dangerous adventures through unfortunate circumstances. Young heroes are generally 8 to 12 years old. They only have 3 points to adjust their attributes and 10 skill points. On the plus side, they draw one extra Fate Chip at the beginning of each game session.",
  description_short:
    "You are a child. Start with only 3 attribute points and 10 skill points. Receive an additional Fate Chip at the start of each game session.",
  effects: [],
};
