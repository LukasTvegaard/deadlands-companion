import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const HabitMajor: HindranceDetailType = {
  key: Hindrance.HabitMajor,
  name: "Habit (Major)",
  description:
    "Your hero has a physical or mental addiction of some sort that is debilitating or possibly even deadly. This includes drug use or chronic drinking. If your character doesn't get their fix for 24 hours, they must make a Fatigue check or suffer a level of Fatigue.",
  description_short:
    "Suffer from a debilitating addiction. Must get their fix every 24 hours or suffer fatigue.",
  effects: [],
};
