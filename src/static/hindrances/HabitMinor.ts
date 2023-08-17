import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const habitMinor: HindranceDetailType = {
  key: Hindrance.HabitMinor,
  name: "Habit (Minor)",
  description:
    "Your hero has an annoying and constant habit of some sort. They suffer -1 to Charisma.",
  description_short: "-1 Charisma due to annoying and constant habit.",
  effects: [],
};
