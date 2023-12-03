import { Rank } from "../../utils/enums";
import { Power } from "../../utils/enums/Power";
import { PowerDetailType, PowerType } from "../../utils/types/PowerDetailType";
import { StandardRangeMelee } from "../weapons/Range";

export const ShapeChange: PowerDetailType = {
  key: Power.ShapeChange,
  name: "Shape Change",
  currentPowerPoints: 0,
  variants: [
    {
      type: PowerType.Utility,
      name: "Shape Change (Novice)",
      powerPointCost: 3,
      activationModifier: 0,
      duration: 10,
      rankRequirement: Rank.Novice,
      notes: `Transform into a tiny creature, e.g. a Hawk, Rabbit, or Cat.`,
      ...StandardRangeMelee,
    },
    {
      type: PowerType.Utility,
      name: "Shape Change (Seasoned)",
      powerPointCost: 4,
      activationModifier: 0,
      duration: 10,
      rankRequirement: Rank.Seasoned,
      notes: `Transform into a small creature, e.g. a Dog, Wolf, or Deer.`,
      ...StandardRangeMelee,
    },
    {
      type: PowerType.Utility,
      name: "Shape Change (Veteran)",
      powerPointCost: 5,
      activationModifier: 0,
      duration: 10,
      rankRequirement: Rank.Veteran,
      notes: `Transform into a medium creature, e.g. a Lion, Horse, or Tiger.`,
      ...StandardRangeMelee,
    },
    {
      type: PowerType.Utility,
      name: "Shape Change (Heroic)",
      powerPointCost: 6,
      activationModifier: 0,
      duration: 10,
      rankRequirement: Rank.Heroic,
      notes: `Transform into a large creature, e.g. a Bear, War Horse, or Shark.`,
      ...StandardRangeMelee,
    },
    {
      type: PowerType.Utility,
      name: "Shape Change (Legendary)",
      powerPointCost: 7,
      activationModifier: 0,
      duration: 10,
      rankRequirement: Rank.Legendary,
      notes: `Transform into a huge creature, e.g. a Great White Shark, Saltwater Crocodile, or Elephant.`,
      ...StandardRangeMelee,
    },
  ],
};
