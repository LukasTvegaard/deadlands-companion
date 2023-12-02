import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const HabitMinor: HindranceDetailType = {
  key: Hindrance.HabitMinor,
  name: "Habit (Minor)",
  description:
    "Your hero has a small addition to a substance. They will indulge in the substance whenever it is present.",
  description_short:
    "Small addiction to a substance. Will always indulge if the substance is present.",
  effects: [],
};
