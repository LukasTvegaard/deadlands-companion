import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const Vow: HindranceDetailType = {
  key: Hindrance.Vow,
  name: "Vow",
  description:
    "Your character has a vow of some sort. Whether it's Major or Minor depends on the Vow itself. Some may have Vows to particular orders or causes, to the Hippocratic Oath, to rid the world of evil, and so on. Whatever the Vow, it's only a Hindrance if it actually comes into play from time to time and causes the character some discomfort.",
  description_short: "Sworn a Vow to some cause.",
  effects: [],
};
