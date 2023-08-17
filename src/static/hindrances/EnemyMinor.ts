import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const EnemyMinor: HindranceDetailType = {
  key: Hindrance.EnemyMinor,
  name: "Enemy (Minor)",
  description:
    "Someone out there has a vengeance against your character. The enemy is likely either ordinary or not explicitly seeking out your hero.",
  description_short:
    "An ordinary enemy has a vengeance against your hero, but might not actively be seeking them out.",
  effects: [],
};
