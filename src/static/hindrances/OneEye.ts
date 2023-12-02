import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const OneEye: HindranceDetailType = {
  key: Hindrance.OneEye,
  name: "One Eye",
  description:
    "Your hero lost an eye for some unfortunate reason. If they don't wear a patch or a glass eye, they suffer -1 Charisma for the grotesque wound. They suffer -2 to any Trait roll that requires depth perception, such as Shooting or Throwing.",
  description_short:
    "Missing an eye. Suffers -2 to all actions that require depth perception.",
  effects: [], // MISSING: EFFECTS
};
