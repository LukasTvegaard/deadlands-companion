import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const GreedyMinor: HindranceDetailType = {
  key: Hindrance.GreedyMinor,
  name: "Greedy (Minor)",
  description:
    "Your hero measures their worth in treasure. They will argue bitterly over loot distribution they consider unfair.",
  description_short:
    "Your hero will always argue for their 'fair share' of the loot.",
  effects: [],
};
