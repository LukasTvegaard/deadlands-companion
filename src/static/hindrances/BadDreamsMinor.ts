import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const BadDreamsMinor: HindranceDetailType = {
  key: Hindrance.BadDreamsMinor,
  name: "Bad Dreams (Minor)",
  description:
    "Your hero occasionally doesn't sleep well. They toss and turn like a demon on a rack, and likely keeps everyone within a dozen yards of them awake with their nightly torment. There is a 50% chance that your hero begins each game session with 1 less Fate Chip to represent their tired state.",
  description_short:
    "50% chance to start each game session with 1 less fate chip, keep people near you awake at night.",
  effects: [],
};
