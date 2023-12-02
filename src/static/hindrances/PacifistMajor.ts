import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const PacifistMajor: HindranceDetailType = {
  key: Hindrance.PacifistMajor,
  name: "Pacifist (Major)",
  description:
    "Your hero absolutely despises violence. They won't fight living characters under any circumstance. They may defend themselves, but won't do anything to permanently harm sentient, living creatures. Note that undeniably evil creatures, undead, demons and the like are fair game, even for a pacifist.",
  description_short:
    "Refuses to fight unless in absolute self-defense, and will never permanently harm living creatures.",
  effects: [],
};
