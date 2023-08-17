import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const OneArm: HindranceDetailType = {
  key: Hindrance.OneArm,
  name: "One Arm",
  description:
    "Whether by birth or battle, your hero has lost an arm. Fortunately, his other arm is his 'good' one. Tasks that require two hands, such as Climbing, suffer a -4 modifier.",
  description_short:
    "Your hero is missing an arm. Tasks that require two hands suffer a -4 penalty.",
  effects: [], // MISSING: Conditional effects.
};
