import { Skill } from "../../utils/enums";
import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";
import { EffectVariant } from "../../utils/types/Effect";

export const AllThumbs: HindranceDetailType = {
  key: Hindrance.AllThumbs,
  name: "All Thumbs",
  description:
    "Some people just aren't good with modern devices. Heroes with this drawback suffer a -2 penalty to the Repair skill at all times. In additionl, when a hero uses a mechanical or electronic device, a roll of 1 on his skill die means the device is broken.",
  description_short:
    "-2 Repair, breaks devices when rolling 1 on the skill die.",
  effects: [
    {
      target: Skill.Repair,
      effectVariant: EffectVariant.ModifyFlat,
      value: -2,
    },
  ],
};
