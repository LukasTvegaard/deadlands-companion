import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const PhobiaMinor: HindranceDetailType = {
  key: Hindrance.PhobiaMinor,
  name: "Phobia (Minor)",
  description:
    "Phobias are overwhelming and irrational fears that stay with a hero for the rest of their life. Whenever a character is in the presence of their phobia, all Trait rolls suffer a -2 penalty. The subject of the phobia must be irrational.",
  description_short:
    "Character has an irrational fear. -2 penalty to all trait rolls when in the presence their phobia.",
  effects: [], // MISSING: Effect
};
