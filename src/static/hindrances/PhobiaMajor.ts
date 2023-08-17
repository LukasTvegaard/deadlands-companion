import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const PhobiaMajor: HindranceDetailType = {
  key: Hindrance.PhobiaMajor,
  name: "Phobia (Major)",
  description:
    "Phobias are overwhelming and irrational fears that stay with a hero for the rest of their life. Whenever a character is in the presence of their phobia, all Trait rolls suffer a -4 penalty. The subject of the phobia must be irrational.",
  description_short:
    "Character has an irrational fear. -4 penalty to all trait rolls when in the presence their phobia.",
  effects: [], // MISSING: Effect
};
