import { DieType } from "../../utils/enums";
import { Power } from "../../utils/enums/Power";
import { PowerDetailType, PowerType } from "../../utils/types/PowerDetailType";

export const Burst: PowerDetailType = {
  key: Power.Burst,
  name: "Burst",
  currentPowerPoints: 0,
  variants: [
    {
      type: PowerType.Attack,
      name: "Burst",
      armorPen: 0,
      rateOfFire: 1,
      damage: { dieTypes: [DieType.D10, DieType.D10], damageModifier: 0 },
      powerPointCost: 2,
      activationModifier: 0,
      notes: `Targets within the cone may make Agility rolls versus the caster's arcane skill roll to avoid the damage.`,
      rangeShort: "Cone",
      rangeMedium: "Cone",
      rangeLong: "Cone",
    },
  ],
};
