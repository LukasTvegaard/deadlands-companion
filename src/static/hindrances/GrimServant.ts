import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";
import { EffectVariant } from "../../utils/types/Effect";

export const GrimServant: HindranceDetailType = {
  key: Hindrance.GrimServant,
  name: "Grim Servant o' Death",
  description:
    "Your hero's a killer. His family's probably pushing daisies, his enemies are worm food, and even a few of his friends have holes in them that are suspiciously the same caliber as his very own shootin' iron. The good news is your hombre adds +1 to any damage roll he ever makes. The downside is that any attack roll that comes up 1 on the skill die automatically hits the nearest friendly character in sight. Snake-eyes on the attack roll adds an additional d6 to the damage.",
  description_short:
    "+1 damage. Hit allies when rolling 1 on attack die. Add 1d6 to ally damage if snake-eyes.",
  effects: [
    {
      effectVariant: EffectVariant.ModifyFlat,
      target: "Damage",
      value: 1,
    },
  ],
};
