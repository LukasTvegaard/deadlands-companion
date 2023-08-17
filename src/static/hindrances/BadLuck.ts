import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const BadLuck: HindranceDetailType = {
  key: Hindrance.BadLuck,
  name: "Bad Luck",
  description:
    "Your hero is a little less lucky than most. They get one less Fate Chip per game session than normal.",
  description_short: "-1 Fate Chip per game session.",
  effects: [],
};
