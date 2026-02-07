import { Power } from "../../utils/enums/Power";
import { PowerDetailType, PowerType } from "../../utils/types/PowerDetailType";
import { StandardRangeSmarts } from "../weapons/Range";

export const DrainPowerPoints: PowerDetailType = {
  key: Power.DrainPowerPoints,
  name: "Drain Power Points",
  currentPowerPoints: 0,
  variants: [
    {
      type: PowerType.Utility,
      name: "Drain Power Points",
      powerPointCost: 3,
      activationModifier: 0,
      duration: 1,
      notes: `Drain 1d6+1 Power Points from the target. On a raise, drain 1d8+2 Power Points instead. All Power Points drained from the target are granted to the caster. \n
      Drain Power Points can only be cast on targets that either have an Arcane Background or are innately magical, with different effects:
	    - Resisting target with arcane background: The power is activated with an opposing arcane skill roll. The roll suffers a -2 penalty if the target's powers come from another source than the caster's. \n
	    - Consenting target with arcane background: Spellcasters can decide to willingly let their power points be drained. Tthe power is activated with a normal spellcasting roll. \n
	    - Innately magical creature: The power is activated with a normal spellcasting roll. When activated, the power grants the rolled number of Power Points to the caster, but nothing is lost from the target.`,
      ...StandardRangeSmarts,
    },
  ],
};
