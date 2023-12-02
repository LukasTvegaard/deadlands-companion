import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const BadDreamsMajor: HindranceDetailType = {
  key: Hindrance.BadDreamsMajor,
  name: "Bad Dreams (Major)",
  description:
    "Your hero doesn't sleep well. They toss and turn like a demon on a rack, and likely keeps everyone within a dozen yards of them awake with their nightly torment. The cowpoke begins each game session with 1 less Fate Chip to represent their constantly tired state.",
  description_short:
    "Start each game session with 1 less fate chip, keep people near you awake at night.",
  effects: [],
};
