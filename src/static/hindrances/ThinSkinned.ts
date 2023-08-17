import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const ThinSkinned: HindranceDetailType = {
  key: Hindrance.ThinSkinned,
  name: "Thin Skinned",
  description:
    "Every little old cut and scrape makes your cowpoke cry for mama. As long as they have at least one wound, they suffer an additional -1 penalty to all their actions.",
  description_short: "-1 to all rolls if wounded.",
  effects: [],
};
