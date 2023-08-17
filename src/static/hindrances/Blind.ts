import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const Blind: HindranceDetailType = {
  key: Hindrance.Blind,
  name: "Blind",
  description:
    "Your hero is completely without sight. They suffer a -6 to all physical tasks that require vision, and -2 to most social tasks as well as they can't 'read' those they are interacting with. Blind characters gain a free edge to compensate.",
  description_short:
    "The hero is blind. -6 to all physical tasks that require sight. -2 to all social tasks.",
  effects: [], // MISSING: EFFECTS
};
