import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const Poverty: HindranceDetailType = {
  key: Hindrance.Poverty,
  name: "Poverty",
  description:
    "It's said a fool and his money are soon parted. Your hero is that fool. He starts with half the usual money and just can't seem to hang onto funds acquired after play beings. In general, the player halves their total funds at the start of every session.",
  description_short:
    "Bad with money. Halve funds at the end of every game session.",
  effects: [],
};
