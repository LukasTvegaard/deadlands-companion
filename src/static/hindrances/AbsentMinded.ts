import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const AbsentMinded: HindranceDetailType = {
  key: Hindrance.AbsentMinded,
  name: "Absent Minded",
  description:
    "Your hero tends to forget little details. Maybe they accidentally eat raw coffee or forget to wear pants. To remember an important detail, your hero must make a Smarts roll. If they fail, they can't remember it.",
  description_short:
    "Generally absent minded. Can be required to succeed a Smarts roll to remember an important detail at the Marshal's discretion.",
  effects: [],
};
