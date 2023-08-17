import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const FocusMajor: HindranceDetailType = {
  key: Hindrance.FocusMajor,
  name: "Focus (Major)",
  description:
    "Only characters with an Arcane Background can take this Hindrance. Your character has a mental dependence on a physical item to use their powers. Whatever the item, the character suffers a -2 penalty to all arcane skill rolls if they don't have it. Anyone who sees the item can tell it is real important. If a Focus item is lost, it can be replaced after two game weeks. Hexslingers and Weird Scientists are unable to take this hindrance as they are already reliant on a physical item to enact their powers.",
  description_short:
    "Reliance on a physical item to channel powers. Not having the items incurs a -2 penalty to all Spellcasting rolls.",
  effects: [], // MISSING: Conditional effect
};
